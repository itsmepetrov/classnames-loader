# classnames-loader

[![npm version](https://img.shields.io/npm/v/classnames-loader.svg?style=flat-square)](https://www.npmjs.com/package/classnames-loader)

This is a webpack loader that automatically bind [css-modules](https://github.com/css-modules/css-modules) to [classnames](https://github.com/JedWatson/classnames).

If you are using css-modules, or a similar approach to abstract class "names" and the real `className` values that are actually output to the DOM, you may want to use the [bind](https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules) variant of classnames module.

Check out [this example](https://gist.github.com/itsmepetrov/7dbe519bb1332dd0f6c9) that shows the difference between `classNames`, `classNames/bind` and `classnames-loader`

### Installation

```
npm install --save-dev classnames-loader
```

## Usage

To enable this loader add `classnames` before `style` loader in webpack config: 

```js
{
  test: /\.css$/,
  loader: 'classnames!style!css')
}
```

If you're using `ExtractTextPlugin` your webpack config should look like this:

```js
{
  test: /\.css$/,
  loaders: ['classnames', ExtractTextPlugin.extract('style', 'css')])
}
```

Example usage in component:

```js
import { Component } from 'react';
import cx from './submit-button.css';

export default class SubmitButton extends Component {
  render () {
    let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
    let className = cx({
      base: true,
      inProgress: this.props.store.submissionInProgress,
      error: this.props.store.errorOccurred,
      disabled: !this.props.form.valid,
    });
    return <button className={className}>{text}</button>;
  } 
}
```

You can also access the class names just as you would do that with [css-modules](https://github.com/css-modules/css-modules):

```js
import { Component } from 'react';
import styles from './submit-button.css';

export default class SubmitButton extends Component {
  render () {
    let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
    return <button className={styles.submitButton}>{text}</button>;
  } 
}
```

## Thanks

[@JedWatson](https://github.com/JedWatson) for [classnames](https://github.com/JedWatson/classnames) module

## License

[MIT](LICENSE.md)
