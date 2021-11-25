<template>
    <div>
        <div class="bg-blue-c100">
            <nav class="bg-white shadow-md rounded-b-2xl">
                <div class="h-1 bg-gradient-to-r from-green-c200 to-blue-c200"></div>
                <div class="mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex h-16">
                            <div class="md:flex">
                                <a href="#" class="font-medium text-green-c100 absolute right-7 top-6 text-sm">Login</a>
                            </div>                    
                        </div>
                    </div>
                </div>
            </nav>

            <div class="mt-4 text-center">
                <div class="px-4">
                    <h1 class="text-gray-700 text-5xl">
                        Deine Job website
                    </h1>
                </div>
                <div class="agree mt-4 w-full"></div>
            </div>
        </div>

        <div class="bg-white shadow-md rounded-t-2xl -mt-10">
             <div class="mx-auto px-4 border-b-2 border-gray-100">
                <div class="flex h-36">
                    <button class="bg-gradient-to-r from-green-c200 to-blue-c200 rounded-t-2xl rounded-b-2xl py-2 px-6 text-white w-full mt-6 h-11">Kostenlos Registrieren</button>
                </div>
            </div>

            <div class="mx-auto px-4">
                <div class="flex flex-row overflow-scroll scrollbar-hide mt-6 mb-6">
                    <button v-bind:class="[isShowing1 ? 'bg-green-c300 text-white': 'text-green-c100', 'rounded-l-2xl', 'py-2', 'px-6', 'w-full', 'border-2', 'border-gray-100']" @click="say('section1')">Arbeitnehmer</button>
                    <button v-bind:class="[isShowing2 ? 'bg-green-c300 text-white': 'text-green-c100', 'py-2', 'px-6', 'w-full', 'border-2', 'border-gray-100']" @click="say('section2')">Arbeitgeber</button>
                    <button v-bind:class="[isShowing3 ? 'bg-green-c300 text-white': 'text-green-c100', 'rounded-r-2xl', 'py-2', 'px-6', 'w-full', 'border-2', 'border-gray-100']" @click="say('section3')">Temporaburo</button>
                </div>
            </div>

             <div class="mx-auto" v-if="isShowing1">
                <One />
            </div>

            <div class="mx-auto" v-if="isShowing2">
                <Two />
            </div>

            <div class="mx-auto" v-if="isShowing3">
                <Three />
            </div>

        </div>
    </div>
</template>

<style>
    .agree {
        background: url('~image/agree.svg'); 
        height: 404.84px;
    }
</style>

<script>
import One from './One.vue';
import Two from './Two.vue';
import Three from './Three.vue';

export default {
    components: {
        One,
        Two,
        Three
    },
    data() {
        return {
            isShowing1: true,
            isShowing2: false,
            isShowing3: false
        }
    },  

    methods: {
        say (value) {
            if(value == 'section1') {
                this.isShowing1 = true;
                this.isShowing2 = false;
                this.isShowing3 = false;
            } else if(value == 'section2') {
                this.isShowing2 = true;
                this.isShowing1 = false;
                this.isShowing3 = false;
            } else {
                this.isShowing3 = true;
                this.isShowing1 = false;
                this.isShowing2 = false;
            }
        }
    }
    
}

</script>