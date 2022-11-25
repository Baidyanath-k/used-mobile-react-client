import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="react-application mb-6">
                <h2 className='text-2xl font-bold'>What are the different ways to manage a state in a React application?</h2>

                <p className='text-xl my-3'>There are four main types of state you need to properly manage in your React apps:</p>
                <ol className='text-xl font-bold mb-3'>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </ol>
                <p className='text-xl mb-5'> <span className='text-xl font-bold'>Local state:</span> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. </p>
                <p className='text-xl mb-5'> <span className='text-xl font-bold'>Global state:</span> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global. </p>
                <p className='text-xl mb-5'> <span className='text-xl font-bold'>Server state:</span> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier. </p>
                <p className='text-xl mb-5'> <span className='text-xl font-bold'>URL state:</span> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build. </p>
            </div>

            <div className="prototype mb-10">
                <h2 className='text-2xl font-bold'>How does prototypical inheritance work?</h2>

                <p className='text-xl mb-5'>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                <p className='text-xl mb-5'>All JavaScript objects inherit properties and methods from a prototype:</p>
                <ul className='text-xl mb-3'>
                    <li>Date objects inherit from Date.prototype.</li>
                    <li>Array objects inherit from Array.prototype.</li>
                    <li>Player objects inherit from Player.prototype.</li>
                </ul>
            </div>

            <div className="unit-test mb-9">
                <h2 className='text-2xl font-bold'>What is a unit test? Why should we write unit tests?</h2>
                <p className='text-xl mb-4'>Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. <span className='font-bold'>“Unit testing is a great discipline, which can lead to 40% – 80% reductions in bug density.”</span> </p>

                <p className='text-xl'>As I said before, unit tests are our best friend. It gives to us confidence to make changes and refactors without worrying if our application it’s still working or not. In addition, it ensures to us that our code works properly, avoiding bugs and hours of debugging. E.g.: There is a Link component that redirects internally to the SPA through to prop, then you added a new prop called href that redirects to external links like youtube.com How do you ensure the to behavior is working normally, and you didn’t break existent flows? Going screen by screen and testing it? Ask for other develops checking their screens? No, you create a unit test that ensure that every time you click in a Link which has a to prop the navigation you be internally, and create another test for href behavior.</p>
            </div>

            <div className="react-angular-vue">
                <h2 className='font-bold text-2xl mb-2'>React vs. Angular vs. Vue?</h2>
                <p className='text-xl mb-5'> <span className='font-bold'>React:</span> React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                    React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                    Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                    React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.

                    Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive. </p>

                <p className='text-xl mb-5'> <span className='font-bold'>Angular:</span> The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                    Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                    Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.

                    Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.

                    SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code. </p>


                <p className='text-xl mb-5'> <span className='font-bold'>Vue: </span> In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                    AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                    Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                    Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.

                    Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.

                    Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.

                    Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported. </p>
            </div>
        </div>
    );
};

export default Blogs;