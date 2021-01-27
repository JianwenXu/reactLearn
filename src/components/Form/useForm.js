/**
 * useForm 自定义 hook
 */
import React from 'react'
import Schema from 'async-validator';

class FormStore {
  constructor() {
    this.store = {}; // 数据仓库
    this.fieldEntities = []; // 存储组件实例
    this.callbacks = {};
    this.validateFields = {}; // 存储校验的 field 和 rules
  }

  setValidateFields = (validateField) => {
    this.validateFields = {
      ...this.validateFields,
      ...validateField
    }
  }

  setCallbacks = (newCallbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...newCallbacks
    }
  }

  setFieldEntities = (field) => {
    this.fieldEntities.push(field)
    if (field.props.rules) {
      this.setValidateFields({
        [field.props.name]: field.props.rules
      })
    }
    return () => {
      this.fieldEntities = this.fieldEntities.filter(f => f !== field)
      delete this.store[field.props.name]
      delete this.validateFields[field.props.name]
    }
  }

  getFieldValue = (name) => {
    return this.store[name];
  }

  getFieldsValue = () => {
    return {
      ...this.store
    }
  }

  setFieldsValue = (newStore) => {
    console.log('setFieldsValue', newStore);
    this.store = {
      ...this.store,
      ...newStore
    }
    // 更新组件
    this.fieldEntities.forEach((field) => {
      Object.keys(newStore).forEach(k => {
        if (k === field.props.name) {
          field.onStoreChange()
        }
      })
    })
  }

  validate = () => {
    const validator = new Schema(this.validateFields);
    return validator.validate(this.getFieldsValue()).then(() => {
      return [];
    }).catch(({errors}) => {
      return errors;
    });
  }

  submit = async () => {
    const err = await this.validate()
    const { onFinish, onFinishFailed } = this.callbacks;
    if (err.length === 0) {
      onFinish(this.getFieldsValue())
    } else {
      onFinishFailed(err, this.getFieldsValue())
    }
  }

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      setFieldEntities: this.setFieldEntities,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
      setValidateFields: this.setValidateFields
    }
  }
}



// 保证用到的是同一个数据仓库
const useForm = (form) => {
  const formRef = React.useRef();

  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm()
    }
  }

  return [formRef.current];
}

export default useForm;