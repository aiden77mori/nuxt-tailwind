<template>
    <div>
        <nav class="bg-white shadow-md rounded-b-2xl w-full z-50 fixed top-0">
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
        
        <div class="relative h-659">
            <div class="absolute text-center z-10">
                <div class="px-4 pt-20">
                    <h1 class="text-gray-700 text-5xl">
                        Deine Job website
                    </h1>
                </div>
                <div class="agree mt-2 w-full"></div>
            </div>

            <div class="absolute top-0 right-0 left-0 h-full" ><svg preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00, 639.37 C120.00, 639.48 240.50, 550.86 360.00,575.50 L360.00, 0.00 L0.00, 0.00 Z" style="stroke: none; fill: #E6FFFA;"></path></svg></div>
        </div>

        <div class="">
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

        <div class="bg-white mx-auto border-t-2 border-gray-200 shadow-md rounded-t-2xl fixed bottom-0 right-0 left-0 z-50">
            <div class="flex h-24 px-4 items-center">
                <button class="bg-gradient-to-r from-green-c200 to-blue-c200 rounded-t-2xl rounded-b-2xl text-white w-full h-11">Kostenlos Registrieren</button>
            </div>
        </div>
    </div>
</template>

<style>
    .agree {
        background: url('~image/agree.svg'); 
        height: 404.84px;
    }
    .h-659 {
        height: 659.37px;
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