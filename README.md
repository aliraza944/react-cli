<img src="https://i.imgur.com/1pU4G0r.png" alt="react-cli">

<div align="center">
	<h1>React CLI<br>
	<!-- <img src="https://img.shields.io/npm/l/react-cli?color=8A2BE2"> -->
	<img src="https://img.shields.io/npm/v/react-cli?color=8A2BE2">
	<img src="https://img.shields.io/npm/dt/react-cli?color=8A2BE2">
	</h1>
</div>

> A CLI that let's you create boilerplate's for react components, redux files and custom hooks

## 🎩 INSTALLATION

Install the CLI globally. If you are Windows user, run your Command Prompt or Terminal as Administrator.

```sh
npm i -g @aliraza944/react-cli
```

## ⚙️ USAGE

## Simple React File

To create a simple react file in a specific folder you have to run the following command in the root directory you your project

```sh
rc file <your-file-name> <your-file-folder> 
```

This will create a directory for your file which will contain a `<your-file-name>.jsx`  file and an `index.jsx` from which your file will be default exported in the specified folder. If you leave the folder empty it will create the file in the root directory of your project.

## Components

To create a component you have to run the following command in the root directory you your project

```sh
rc component <your-component-name>
```
This will create a components folder in you components directory. This folder will contain the `<your-component-name>.jsx` file and an `index.jsx` file form which your component will be default exported.

#### Component's Custom Hook

To create a component with custom hook you have to run the following command root directory you your project

```sh
rc component <your-component-name> --hook <your-hooks-dir>
```
This will create a components folder in you components directory. This folder will contain the `<your-component-name>.jsx` file and an `index.jsx` file form which your component will be default exported. It will also create a `use<your-component-name>.js` file in the specified hook directory. 
**If you don't specify the folder for your custom hook it will create the hook in same directory of you component.**

## Custom Hooks

To create a custom hook you have to run the following command in the root directory you your project

```sh
rc hook <your-hook-name> [your-hooks-dir]
```
This will create a `<your-hook-name>.js` file in the specified hooks directory. By default it will create the hook in the hooks directory if you don't specify the folder for it.

<div>
<a href="https://www.linkedin.com/in/ali-raza-sabri/">
  <img src="https://img.shields.io/badge/LinkedIn-Ali%20Raza-blue?logo=linkedin&logoColor=blue&color=blue" />
</a>
<a href="mailto:alisabri022@gmail.com" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Gmail-Ali%20Raza-red?logo=gmail&logoColor=red&color=red" />
</a>

</div>
