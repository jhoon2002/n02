<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div class="px-3 py-4">
        <ul class="space-y-2">
            <template v-for="item in items">
                <side-menu-list
                    :item="item"
                    v-if="item.children?.length > 0"
                >
                    <side-menu :items="item.children" />
                </side-menu-list>
                <side-menu-item
                    :item="item"
                    v-else
                ></side-menu-item>
            </template>
        </ul>
    </div>
</template>
