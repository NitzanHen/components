# Personal Component Library

The idea - to create a set of reusable, easily customizable, well tested components, which I can later use in other projects.

## 🎯 Design Principles

### 🏺Reusability

It should be easy to add the components to every new project; this breaks down into multiple considerations: 

- The components should be **supported in a variety of environments** - with different UI styling tools, for example, and perhaps across multiple front-end frameworks.
- The components should have **as little dependencies as possible**
- The components should be **easy to use** - in terms of setting up, passing props & options, customizing, etc.

### 🧩 Customizability

To truly be suitable to many different projects, customizing the components should be as easy as possible. This means supporting different looks and feels, with a focus on styling; many of them should basically be headless, containing only logic (such that styling is completely up to the user of the components), and logic that supports different scenarios.

### 🎓 Well-tested

These components are purposed to be used (or at least usable) in most projects I take part in, and for that end confidence that they work well is cardinal.

Therefore, a comprehensive set of tests should accompany each of these components, assuring they do what they are expected to do, and do it well.

# 🏯 Technologies

The front-end framework I'm most experienced with (by a margin) is **React**. As a consequence, most of these components will be written as React components at first - either because I've already implemented them for a project, or because I want to implement them in an environment I know excellently first. However, eventually I aspire for all component to be implemented as **Svelte** components - and in turn compiled to web components - as well. With web components built in svelte, I achieve *maintainable* components that can be used in *any* JavaScript environment. 

React components will be written with Typescript; as for web components, I'm not sure there's a way to type them.

# Components

## Inputs

- Checkbox
- Radio button
- Select
- Date picker

- Button
- Skeleton
- Custom scrollbar
- Table
- Timeline (todo: find a name. Equivalent of [https://material-ui.com/components/timeline/](https://material-ui.com/components/timeline/))
