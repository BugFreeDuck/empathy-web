<script lang="ts">
    type Section = 'about-us' | 'schedule' | 'prices' | 'services';

    interface Props {
        section: Section,
    }

    let {
        section
    }: Props = $props();

    let imageUrl: string = $state('');

    if (section === 'about-us') {
        imageUrl = '/home/about-us.svg'
    }
    if (section === 'schedule') {
        imageUrl = '/home/schedule.svg'
    }
    if (section === 'prices') {
        imageUrl = '/home/prices.svg'
    }
    if (section === 'services') {
        imageUrl = '/home/services.svg'
    }

</script>

<style>
    div {
        aspect-ratio: 402/204;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        flex-grow: 1;
    }

    div:not(:first-of-type){
        margin-top: -4vh;
    }

</style>

<div style="background-image: url({imageUrl});">

</div>

