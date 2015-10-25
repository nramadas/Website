export default [
    "A work-in-progress, Storable is a data-store implementation built using Observables. Data is retrived from the store by specifying a key path. Instead of returning a value, Storable returns an Observable that represents changes to that key path.",
    "Storable comes with many useful features. It adds what is called a \"Manager\", which watches and records each change to the data in the Store. The Manager can then replay events, fast-forward and rewind through state, and even commit and rewrite the data at a particular commit.",
    "In addition, state itself is easily hot-swappable. When plugged into a javascript hot-reloader, a developer can easily modify the state of their app as they develop.",
    "Since the Storable store ultimately describes changes at a key path, it fits very well into a Virtual-DOM ecosystem. A component can request all the data it needs and receive a single Observable, re-rendering itself as the Observable emits changes.",
    "To take advantage of Storable's natural fit in a Virtual-DOM ecosystem, there is \"storable-react\", (available on npm, also a work-in-progress). It neatly hooks up the Storable library to React components, passing in data changes from the store as React Props.",
];
