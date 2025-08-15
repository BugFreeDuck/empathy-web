<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
    import TextSocialLinks from "../molecules/TextSocialLinks.svelte";

    interface Props {
        isFixed: boolean
    }

    let {isFixed}: Props = $props();
</script>

<style>
    div#footer.fixed{
        position: fixed;
        bottom: 0;
    }

    div#footer {
        aspect-ratio: 402/57;
        height: 123px;

        width: 100%;

        display: flex;
        align-items: end;
        justify-content: center;

        background-image: url("/desktop/wave-footer.svg");
        background-position: center;
        background-repeat: repeat-x;
    }

    div.footer-grid {
        position: relative;
        height: 100%;
        width: 100%;
        max-width: 1440px;
        padding-bottom: 1em;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    div.grid-item{
        display:flex;
        align-items: end;
        justify-content: center;
    }
</style>

<div id="footer" class:fixed={isFixed}>
    <div class="footer-grid">
        <div class="grid-item">
            <TextSocialLinks fontSize={16}/>
        </div>
        <div class="grid-item">
        <Label size={16} font="redhat" color="gray">© empathy, 2025</Label>
        </div>
    </div>
</div>

