Todos.Todo = DS.Model.extend({
    title       : DS.attr('string'),
    isCompleted : DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title : 'TODO 1',
        isCompleted: false
    },
    {
        id: 2,
        title : 'TODO 2',
        isCompleted: true
    },
    {
        id: 3,
        title : 'TODO 3',
        isCompleted: false
    },
    {
        id: 4,
        title : 'TODO 4',
        isCompleted: false
    }
];
