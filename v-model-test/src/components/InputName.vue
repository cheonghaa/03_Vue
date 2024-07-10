<template>
    <div>
        <InputName />
        <h3>검색어 : {{ searchName }}</h3>
    </div>
</template>

<script>
import


export default {
name: 'App',
components: { InputName },
data() {
return {searchName : 'John'};
};
}
</script>
