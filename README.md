# react-use-fetch
Fetch with simple loading container.

[![npm package][npm-image]][npm-url]
[![Dependencies Status][david-image]][david-url]
[![Package Size][bundlephobia-image]][bundlephobia-url]

## Getting started

#### Install with NPM:

```
$ npm install react-use-fetch-hooks
```

#### Usage

**Live Demo [CodeSandbox](https://codesandbox.io/s/react-use-fetch-uw68y "CodeSandbox")**

With this component, you can simply manage the loading process when you send fetch requests. You can control the loading process of each fetch request separately. You don't need to write extra code for this.

##### Example

When you send the fetch request, the field inside the ```<Loading></Loading>``` tags is blocked and becomes accessible again when the request is done or error.

```jsx
import React from 'react';
import useFetch from 'react-use-fetch-hooks';
import 'react-use-fetch-hooks/dist/index.css';

function App() {
  const [Fetch, Loading] = useFetch(
    'REQUEST URL',
    'REQUEST OPTIONS',
  );
  return (
  <div>
    <Loading>
      <button type="button" onClick={() => Fetch()}></button>
    </Loading>
  </div>
  );
};

export default App;
```

#### Properties

Descriptions and configuration settings for component properties.

##### useFetch

| Property | Type | Required | Default | Description |
|--------------------------|---------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url | string | no | null | Fetch request uri. |
| requestOptions | string | no | null | Fetch [request options](https://github.github.io/fetch/#options "request options"). |


##### Loading

| Property | Type | Required | Default | Description |
|--------------------------|---------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dark | bool | no | false | Use dark theme loading overlay. |
| className | string | no | null | Loading container custom class. |


#### Author

**Barış Ateş**
 - http://barisates.com
 - [github/barisates](https://github.com/barisates "github/barisates")

[npm-image]:https://img.shields.io/npm/v/react-use-fetch-hooks.svg
[npm-url]:https://www.npmjs.com/package/react-use-fetch-hooks
[david-image]:https://david-dm.org/barisates/react-use-fetch-hooks.svg
[david-url]:https://david-dm.org/barisates/react-use-fetch-hooks
[bundlephobia-image]:https://badgen.net/bundlephobia/minzip/react-use-fetch-hooks
[bundlephobia-url]:https://bundlephobia.com/result?p=react-use-fetch-hooks
