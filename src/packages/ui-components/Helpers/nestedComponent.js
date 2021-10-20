export default function nestedComponent(component, nested) {
    Object.keys(nested).forEach(function (key) {
        component[key] = nested[key];
    });
    return component;
}
