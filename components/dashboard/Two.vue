<template>
    <div>
        <h1 class="text-center text-gray-700 text-2xl px-14 mb-4 leading-none">Drei einfache Schritte zu deinem neuen Job</h1>

        <div class="section-one relative">
            <div class="absolute babble"></div>
            <div class="twoprofile top-0 right-0 absolute">
            </div>
            <div class="absolute bottom-10 left-4 text-9xl text-gray-500">1.</div>
            <div class="absolute bottom-14 right-0 text-gray-500">Erstellen dein Lebenslauf</div>
        </div>

        <div class="section-two relative bg-gradient-to-r from-blue-c400 to-blue-c500">
            <div class="box absolute top-5 right-4">
                <div class="absolute text-9xl left-4 text-gray-500">2.</div>
                <div class="absolute top-24 right-0 text-gray-500">Erstellen dein Lebenslauf</div>
                <div class="twoprofile2 bottom-0 left-10 absolute"></div>
            </div>
        </div>

        <div class="section-three relative -mt-6">
            <div class="absolute babble3"></div>
            <div class="absolute box3 top-0 right-2">
                <div class="absolute text-9xl left-4 text-gray-500">3.</div>
                <div class="absolute top-14 right-4 w-36 text-gray-500">Mit nur einem Klick bewerben</div>
                <div class="twoprofile3 absolute bottom-0 left-5"></div>
            </div>
        </div>
    </div>
</template>

<style>
    .section-one {
        width: 320px;
        height: 264.94px;
    }
    .section-two {
        background: transparent linear-gradient(134deg, #E6FFFA 0%, #EBF4FF 100%) 0% 0% no-repeat padding-box;
        height: 370px;
    }
    .section-three {
        height: 456.79px;

    }
    .box {
        width: 310px;
        height: 281.64px;
    }
    .box3 {
        width: 299px;
        height: 326.79px;
    }
    .twoprofile {
        background: url('~image/profile.svg'); 
        width: 219.56px; 
        height: 144.55px;
    }
    .twoprofile2 {
        background: url('~image/aboutme.svg');
        width: 258.7px;
        height: 179.2px;
    }
    .twoprofile3 {
        background: url('~image/swipprofile.svg');
        width: 240.16px;
        height: 196.54px;
    }
</style>