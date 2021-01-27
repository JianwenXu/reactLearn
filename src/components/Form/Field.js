/**
 * Field 组件
 */
import React, { Component } from 'react';
import FieldContext from './FieldContext';

class Field extends Component {

  static contextType = FieldContext

  // 注册
  // 注册和取消注册要成对实现
  componentDidMount() {
    this.unRegister = this.context.setFieldEntities(this)
  }

  componentWillUnmount() {
    if (this.unRegister) {
      this.unRegister()
    }
  }

  onStoreChange = () => {
    this.forceUpdate()
  }
  
  getControlled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldsValue } = this.context
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value;
        setFieldsValue({
          [name]: newValue
        })
      }
    }
  }

  render() {
    const { children } = this.props;
    const returnChild = React.cloneElement(children, this.getControlled());
    return returnChild;
  }
}

export default Field