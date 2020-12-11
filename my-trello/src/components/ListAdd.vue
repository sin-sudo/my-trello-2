<template>
    <div>
        <form :class="classList" @submit.prevent='addlist'>
            <input type="text" v-model="title" class="text-input" placeholder="Add new list" @focusin="startEditing" @focusout='finishEditing'>
            <button type="submit" class="add-button">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: '',
            isEditing: false,
        }
    },
    computed: {
        classList() {
            const classList = ['addlist']
            if (this.isEditing) {
                classList.push('active')
            }
            return classList
        }
    },
    methods: {
        addlist() {
            this.$store.dispatch('addlist', {title: this.title})
            // ここで初期化しないと残ってしまう？
            this.title = ''
        },
        startEditing() {
            this.Editing = true;
        },
        finishEditing() {
            this.Editing = false;
        }
    }
}
</script>