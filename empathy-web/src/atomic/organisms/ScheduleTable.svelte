<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
    import type {Color} from "../atoms/Text/common";


    interface Props {
        address?: string
    }

    let {
        address,
    }: Props = $props();

    const bigTextSize = 18;
    const smallTextSize = 14;
</script>

<style>
    div.schedule-table {
        width: 100%;

        padding-left: 1em;
        padding-right: 1em;
        padding-bottom: 2em;

        display: flex;
        flex-direction: column;
    }

    div.schedule-table > :global(label){
        margin-left: 2em;

    }

    table {
        width: 100%;
        margin-top: 0.5em;
    }

    table > thead {
        text-align: left;
    }

    table > thead > tr > th {
        width: 25%;
    }

    table > tbody {
        text-align: center;
    }

    div.schedule-table > :global(label)::after,
    table > tbody > tr::after,
    table > tbody::after {
        content: "";

        position: absolute;
        width: 100%;
        left: 0;

        background-image: url("/schedule/background-wave.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: bottom;
        aspect-ratio: 402/20;
    }

    table > tbody > tr > td > div {
        display: flex;
        flex-direction: column;
        margin-top: 0.4em;
    }

</style>

<div class="schedule-table">
    <Label weight="bold" size={bigTextSize}>{address}</Label>
    <table>
        <thead>
        <tr>
            <th></th>
            <th><Label size={bigTextSize} weight="bold">12:00</Label></th>
            <th><Label size={bigTextSize} weight="bold">16:00</Label></th>
            <th><Label size={bigTextSize} weight="bold">17:00</Label></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th><Label size={bigTextSize} weight="bold">I</Label></th>
            <td>
                <div>
                    <Label size={bigTextSize} alignment="left">LADIES</Label>
                    <Label size={smallTextSize}>18+ m.</Label>
                </div>
            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>KIDS</Label>
                    <Label size={smallTextSize}>7-11 m.</Label>
                </div>
            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>ADULTS</Label>
                    <Label size={smallTextSize}>16+ m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} weight="bold">II</Label></th>
            <td>

            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>JUNIORS</Label>
                    <Label size={smallTextSize}>12-15 m.</Label>
                </div>
            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>MINI</Label>
                    <Label size={smallTextSize}>4-6 m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} weight="bold">III</Label></th>
            <td>
                <div>
                    <Label size={bigTextSize} alignment="left">LADIES</Label>
                    <Label size={smallTextSize}>18+ m.</Label>
                </div>
            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>KIDS</Label>
                    <Label size={smallTextSize}>7-11 m.</Label>
                </div>
            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>ADULTS</Label>
                    <Label size={smallTextSize}>16+ m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} weight="bold">IV</Label></th>
            <td>

            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>JUNIORS</Label>
                    <Label size={smallTextSize}>12-15 m.</Label>
                </div>
            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>MINI</Label>
                    <Label size={smallTextSize}>4-6 m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} weight="bold">V</Label></th>
            <td>

            </td>
            <td>

            </td>
            <td>
                <div>
                    <Label size={bigTextSize}>LADIES</Label>
                    <Label size={smallTextSize}>18+ m.</Label>
                    <Label size={smallTextSize}>*17:00-18:30</Label>
                </div>
            </td>
        </tr>
        </tbody>
    </table>

</div>
