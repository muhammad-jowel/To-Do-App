import {create} from "zustand"

const TodoStore = create((set) => ({
    inputList: '',
    items: [],
    isEdit : false,
    todoId : null,
    setInputList: (newInput) => set({ inputList: newInput }),

    addItem: () =>
        set((state) => {
            return {
                items: [...state.items, { id: Date.now(), name: state.inputList }],
                inputList: "",
            };
        }),

    removeItem: (index) => set((state) => {
        const newItems = [...state.items];
        newItems.splice(index, 1);
        return { items: newItems };
    }),

    setEditTodo: (id, inputList) => set({ inputList: inputList, isEdit: true, todoId: id }),
    updateItem: () =>
        set((state) => {
            if (state.todoId !== null) {
                return {
                    items: state.items.map((todo) =>
                        todo.id === state.todoId ? { ...todo, name: state.inputList } : todo
                    ),

                    inputList: "",
                    isEdit: false,
                    todoId: null,
                };
            }
            return state;
        }),

}))


export default TodoStore;