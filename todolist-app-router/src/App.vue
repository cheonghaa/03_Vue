<template>
    <div class="container">
        <Header />
        <router-view />
        <Loading v-if="states.isLoading" />
    </div>
</template>

<script setup>
import { reactive, computed, provide } from "vue";
import Header from "@/components/header.vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";

const BASEURI = "/api/todos";
const states = reactive({ todoList: [] });

//TodoList 목록을 조회합니다
const fetchTodoList = async () => {
    states.isLoading = true;
    try {
        const response = await axios.get(BASEURI);
        if (response.status === 200) {
            states.todoList = response.data;
        } else {
            alert("데이터 조회 실패");
        }
    } catch (error) {
        alert("에러발생 :" + error);
    }
    states.isLoading = false;
};

// const states = reactive({
//     todoList: [
//         { id: 1, todo: "ES6 학습", desc: "설명 1", done: false },
//         { id: 2, todo: "React 학습", desc: "설명 2", done: false },
//         { id: 3, todo: "ContextAPI 학습", desc: "설명 3", done: true },
//         { id: 4, todo: "야구경기 관람 ", desc: "설명 4", done: false },
//     ],
// });

const addTodo = async ({ todo, desc }, successCallback) => {
    states.isLoading = true;
    try {
        const payload = { todo, desc };
        const response = await axios.post(BASEURI, payload);
        if (response.status === 201) {
            states.todoList.push({ ...response.data, done: false });
            successCallback();
        } else {
            alert("Todo 추가 실패");
        }
    } catch (error) {
        alert("에러발생 :" + error);
    }
    states.isLoading = false;
};

const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
    states.isLoading = true;
    try {
        const payload = { id, todo, desc, done };
        const response = await axios.put(BASEURI + `/${id}`, payload);
        if (response.status === 200) {
            let index = states.todoList.findIndex((todo) => todo.id === id);
            states.todoList[index] = payload;
            successCallback();
        } else {
            alert("Todo 변경 실패");
        }
    } catch (error) {
        alert("에러발생 :" + error);
    }
    states.isLoading = false;
};

const deleteTodo = async (id) => {
    states.isLoading = true;
    try {
        const response = await axios.delete(BASEURI + `/${id}`);
        console.log(response.status, response.data);
        if (response.status === 200) {
            let index = states.todoList.findIndex((todo) => todo.id === id);
            states.todoList.splice(index, 1);
        } else {
            alert("Todo 삭제 실패");
        }
    } catch (error) {
        alert("에러발생 :" + error);
    }
    states.isLoading = false;
};

const toggleDone = async (id) => {
    states.isLoading = true;
    try {
        let todo = states.todoList.find((todo) => todo.id === id);
        let payload = { ...todo, done: !todo.done };
        const response = await axios.put(BASEURI + `/${id}`, payload);
        if (response.status === 200) {
            todo.done = payload.done;
        } else {
            alert("Todo 완료 변경 실패");
        }
    } catch (error) {
        alert("에러발생 :" + error);
    }
    states.isLoading = false;
};

provide(
    "todoList",
    computed(() => states.todoList)
);
provide("actions", { addTodo, deleteTodo, toggleDone, updateTodo, fetchTodoList });

fetchTodoList();
</script>
