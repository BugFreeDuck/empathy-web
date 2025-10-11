<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
    import Heading from "../atoms/Text/Heading.svelte";

    interface Props {
        address?: string
    }

    let {
        address,
    }: Props = $props();

    const bigTextSize = 16;
    const smallTextSize = 14;
</script>

<style>
    div.schedule-table {
        width: 100%;

        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-bottom: 2em;

        display: flex;
        flex-direction: column;
    }

    div.schedule-table > :global(h1){
        margin-top: 1em;
        margin-left: 2em;
    }

    table {
        width: 100%;
        margin-top: 1em;
    }

    table > thead > tr > th:first-of-type {
        width: 15%;
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
        margin-top: 0.6em;
        margin-right: 1em;

        border-radius: 3em;
    }

    td > div.color-sand{
        background-color: #E5DACF;
    }

    td > div.color-gray{
        background-color: #D5D0CD;
    }

</style>

<div class="schedule-table">
    <Heading font="redhat" size={bigTextSize}>{address}</Heading>
    <table>
        <thead>
        <tr>
            <th></th>
            <th><Label size={bigTextSize} weight="bold" alignment="center">12:00</Label></th>
            <th><Label size={bigTextSize} weight="bold" alignment="center">16:00</Label></th>
            <th><Label size={bigTextSize} weight="bold" alignment="center">17:00</Label></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th><Label size={bigTextSize} weight="bold">I</Label></th>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center">LADIES</Label>
                    <Label size={smallTextSize} alignment="center">25+ m.</Label>
                </div>
            </td>
            <td>
                <div class="color-gray">
                    <Label size={bigTextSize} alignment="center" >KIDS</Label>
                    <Label size={smallTextSize} alignment="center" >7-12 m.</Label>
                </div>
            </td>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center" >ADULTS</Label>
                    <Label size={smallTextSize} alignment="center" >14+ m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} alignment="center"  weight="bold">II</Label></th>
            <td>

            </td>
            <td>

            </td>
            <td>
                <div class="color-gray">
                <Label size={bigTextSize} alignment="center" >MINI</Label>
                    <Label size={smallTextSize} alignment="center" >4-6 m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} alignment="center"  weight="bold">III</Label></th>
            <td>
                <div class="color-sand">
                <Label size={bigTextSize} alignment="center">LADIES</Label>
                    <Label size={smallTextSize} alignment="center" >12+ m.</Label>
                </div>
            </td>
            <td>
                <div class="color-gray">
                <Label size={bigTextSize} alignment="center" >KIDS</Label>
                    <Label size={smallTextSize} alignment="center" >7-12 m.</Label>
                </div>
            </td>
            <td>
                <div class="color-sand">
                    <Label size={bigTextSize} alignment="center" >ADULTS</Label>
                    <Label size={smallTextSize} alignment="center" >14+ m.</Label>
                </div>
            </td>
        </tr>
        <tr>
            <th><Label size={bigTextSize} alignment="center" weight="bold">IV</Label></th>
            <td>

            </td>
            <td>
                
            </td>
            <td>
                <div class="color-gray">
                    <Label size={bigTextSize} alignment="center" >MINI</Label>
                    <Label size={smallTextSize} alignment="center" >4-6 m.</Label>
                </div>
            </td>
        </tr>
        </tbody>
    </table>

</div>
