<script lang="ts">
    type Section = 'about-us' | 'schedule' | 'prices' | 'services';

    interface Props {
        section: Section,
    }

    let {
        section
    }: Props = $props();

    let imageUrl: string = $state('');
    let path: string = $state('');

    if (section === 'about-us') {
        imageUrl = '/home/about.svg';
        path = '/about';
    }
    if (section === 'schedule') {
        imageUrl = '/home/schedule.svg';
        path = '/schedule';
    }
    if (section === 'prices') {
        imageUrl = '/home/prices.svg';
        path = '/prices';
    }
    if (section === 'services') {
        imageUrl = '/home/services.svg';
        path = '/services';
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
        margin-top: -4vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    a{
        display: block;
        height: 15vh;
        width: 80vw;
    }
</style>

<div style="background-image: url({imageUrl});">
    <a href="{path}" aria-label="{section}"></a>
</div>

