<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";

    interface ContactsListProps {
        size: 'small' | 'large';
        fullWidth?: boolean;
    }

    let props: ContactsListProps = $props();


    const fontSize = props.size === 'large' ? 32 : 20;
    const large = props.size === 'large';
</script>

<style>
    div {
        display: flex;
        flex-direction: var(--flex-direction);
        gap: 1em;
        line-height: 1.2em;
        padding: 0 3em;
    }

    div.full-width{
        width: 100%;
        justify-content: space-around;
    }

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }

    img.large {
        height: 48px;
        width: 48px;
    }

    img {
        height: 26px;
        width: 26px;
    }
</style>

<div class:full-width={props.fullWidth}>
    <a href="https://maps.app.goo.gl/7QxLv15fd9TiXfL66">
        <span>
            <img src="icons/location.svg" alt="location" class:large={large}/>
            <Label size={fontSize}>Eitminų g. 20</Label>
        </span>
    </a>
    <a href="tel:(0-628) 19 320">
        <span>
            <img src="icons/phone.svg" alt="location" class:large={large}/>
            <Label size={fontSize}>(0-628) 19 320</Label>
        </span>
    </a>
    <a href="mailto:empathy.vilnius@gmail.com">
        <span>
            <img src="icons/mail.svg" alt="location" class:large={large}/>
            <Label size={fontSize}>empathy.vilnius@gmail.com</Label>
        </span>
    </a>
</div>