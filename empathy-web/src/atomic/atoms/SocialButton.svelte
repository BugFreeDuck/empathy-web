<script lang="ts">
    export type SocialMedia = 'Facebook' | 'Instagram' | 'TikTok' | 'YouTube'

    interface Props {
        type: SocialMedia
    }

    let {type}: Props = $props();

    let imageUrl = $state('');
    let route = $state('');
    if (type === "Facebook") {
        imageUrl = './icons/social-fb.png'
        route = 'https://www.facebook.com/empathyvilnius'
    }
    if (type === "Instagram") {
        imageUrl = './icons/social-instagram.png'
        route = 'https://www.instagram.com/empathy.movement/'
    }
    if (type === "TikTok") {
        imageUrl = './icons/social-tiktok.png'
    }
    if (type === "YouTube") {
        imageUrl = './icons/social-yt.png'
        route = 'https://www.youtube.com/@empathyvilnius'
    }

</script>

<style>
    a {
        height: 47px;
        aspect-ratio: 1 / 1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>

<a href="{route}" aria-label="social-{type}" style="background-image: url({imageUrl})"></a>

