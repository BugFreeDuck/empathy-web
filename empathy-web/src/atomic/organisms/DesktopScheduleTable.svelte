<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";

    interface Props {
        address?: string
    }

    let {
        address,
    }: Props = $props();

    const bigTextSize = 20;
    const smallTextSize = 16;
</script>

<style>
    div.schedule-table {
        width: 90%;

        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-bottom: 2em;

        margin:auto;

        display: flex;
        flex-direction: column;
    }

    div.schedule-table > :global(label){
        margin-left: 2.5em;
    }

    table {
        width: 100%;
        margin-top: 1em;
    }

    table > thead {
        text-align: center;
    }

    table > thead > tr > th:first-of-type {
        width: 20%;
    }

    table > thead > tr > th {
        width: 26.6%;
    }

    table > tbody {
        text-align: center;
    }

    table > tbody > tr > td > div {
        display: flex;
        flex-direction: column;
        border-radius: 50px;

        margin: 0.5em;
        padding: 0.5em;
    }

    td > div.color-sand{
        background-color: #E5DACF;
    }

    td > div.color-gray{
        background-color: #D5D0CD;
    }

</style>

<div class="schedule-table">
    <Label font="marcellus" size={bigTextSize}>{address}</Label>
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
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center">LADIES</Label>
                    <Label size={smallTextSize} alignment="center">18+ m.</Label>
                </div>
            </td>
            <td>
                <div class="color-gray">
                    <Label size={bigTextSize} alignment="center">KIDS</Label>
                    <Label size={smallTextSize} alignment="center">7-11 m.</Label>
                </div>
            </td>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center">ADULTS</Label>
                    <Label size={smallTextSize} alignment="center">16+ m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} weight="bold">II</Label></th>
            <td>

            </td>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center">JUNIORS</Label>
                    <Label size={smallTextSize} alignment="center">12-15 m.</Label>
                </div>
            </td>
            <td>
                <div class="color-gray">
                    <Label size={bigTextSize} alignment="center">MINI</Label>
                    <Label size={smallTextSize} alignment="center">4-6 m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} weight="bold">III</Label></th>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center">LADIES</Label>
                    <Label size={smallTextSize} alignment="center">18+ m.</Label>
                </div>
            </td>
            <td>
                <div class="color-gray">
                    <Label size={bigTextSize} alignment="center">KIDS</Label>
                    <Label size={smallTextSize} alignment="center">7-11 m.</Label>
                </div>
            </td>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center">ADULTS</Label>
                    <Label size={smallTextSize} alignment="center">16+ m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} weight="bold">IV</Label></th>
            <td>

            </td>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center">JUNIORS</Label>
                    <Label size={smallTextSize} alignment="center">12-15 m.</Label>
                </div>
            </td>
            <td>
                <div class="color-gray">
                    <Label size={bigTextSize} alignment="center">MINI</Label>
                    <Label size={smallTextSize} alignment="center">4-6 m.</Label>
                </div>
            </td>
        </tr>
        </tbody>
    </table>

</div>
