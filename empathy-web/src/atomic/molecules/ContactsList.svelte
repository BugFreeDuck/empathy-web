<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 1em;
        line-height: 1.2em;
        padding: 0 3em;
    }

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }

    img {
        height: 26px;
        width: 26px;
    }
</style>

<div>
    <a href="https://maps.app.goo.gl/7QxLv15fd9TiXfL66">
        <span>
            <img src="icons/location.png" alt="location"/>
            <Label size={20}>Eitminų g. 20</Label>
        </span>
    </a>
    <a href="tel:(0-628) 19 320">
        <span>
            <img src="icons/phone.png" alt="location"/>
            <Label size={20}>(0-628) 19 320</Label>
        </span>
    </a>
    <a href="mailto:email@gmail.com">
        <span>
            <img src="icons/mail.png" alt="location"/>
            <Label size={20}>email@gmail.com</Label>
        </span>
    </a>
</div>