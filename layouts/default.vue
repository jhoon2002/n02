<script setup>
const open = ref(true)
</script>
<template>
    <div
        h-screen
        flex
        flex-col
        dark:bg-gray-800
    >
        <header
            flex-none
            h-60px
            border-b
            dark:bg-blue-gray-700
            dark:border-gray-600
            flex
            items-center
            justify-between
            px-3
        >
            <div>
                <div class="flex items-center gap-x-1rem">
                    <div
                        text-1.2rem
                        dark:text-white
                    >
                        한국예술종합학교
                    </div>
                    <button @click="open = !open">
                        <div
                            i-material-symbols-menu-rounded
                            text-1.5rem
                        />
                    </button>
                </div>
            </div>
            <div>
                <div class="flex gap-x-0">
                    <button @click="$colorMode.preference = $colorMode.preference === 'light' ? 'dark' : 'light'" />
                    <a-btn
                        bg-white
                        bg-opacity-0
                        pa-2
                        @click="$colorMode.preference = 'light'"
                        yar
                    >
                        <div
                            i-material-symbols-light-mode
                            bg-black
                            text-1.3rem
                            :bg="$colorMode.preference === 'light' ? 'opacity-80' : 'opacity-20'"
                        />
                    </a-btn>
                    <a-btn
                        bg-white
                        bg-opacity-0
                        pa-2
                        @click="$colorMode.preference = 'dark'"
                    >
                        <div
                            i-material-symbols-dark-mode
                            bg-black
                            text-1.3rem
                            :bg="$colorMode.preference === 'dark' ? 'opacity-80' : 'opacity-20'"
                        />
                    </a-btn>
                    <a-btn
                        bg-white
                        bg-opacity-0
                        pa-2
                        @click="$colorMode.preference = 'sepia'"
                    >
                        <div
                            i-material-symbols-local-cafe-rounded
                            bg-black
                            text-1.3rem
                            :bg="$colorMode.preference === 'sepia' ? 'opacity-80' : 'opacity-20'"
                        />
                    </a-btn>
                    <!--<select v-model="$colorMode.preference">
                        <option value="system">System</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="sepia">Sepia</option>
                    </select>-->
                </div>
            </div>
        </header>
        <div
            flex-auto
            flex
            flex-row
            overflow-y-hidden
        >
            <aside
                overflow-x-hidden
                overflow-y-auto
                flex-none
                border-r
                dark:border-gray-600
                dark:bg-gray-800
                duration-200
                :class="{
                    'w-250px': open,
                    'translate-x--250px w-0': !open,
                }"
            >
                <side-menu />
            </aside>
            <div
                overflow-y-auto
                flex-auto
                flex
                flex-col
            >
                <article
                    flex-auto
                    p-4
                >
                    <slot />
                </article>
                <footer
                    flex-none
                    h-70px
                    border-t
                    dark:border-gray-600
                    flex
                    items-center
                    px-3
                >
                    Korea National University of Arts
                </footer>
            </div>
        </div>
    </div>
</template>
