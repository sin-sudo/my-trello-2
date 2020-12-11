<template>
    <div>
        <form :class='classList' @submit.prevent='addlist'>
            <input type="text" v-model="title" class="text-input" placeholder="Add new list" @focusin="startEditing" @focusout='finishEditing'>
            <!-- フォームがフォーカス、もしくは入力されている時だけボタンを表示する -->
            <button type="submit" class="add-button" v-if='isEditing || titleExists'>Add</button>
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
            if (this.titleExists) {
                classList.push('addable')
            }
            return classList
        },
        titleExists() {
            return this.title.length > 0
        }
    },
    methods: {
        addlist() {
            this.$store.dispatch('addlist', {title: this.title})
            // ここで初期化しないと残ってしまう？
            this.title = ''
        },
        startEditing() {
            this.isEditing = true;
        },
        finishEditing() {
            this.isEditing = false;
        }
    }
}
</script>