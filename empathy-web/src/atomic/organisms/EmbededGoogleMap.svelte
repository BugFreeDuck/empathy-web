<script lang="ts">
    const apiKey: string = 'AIzaSyDkQH7KqFwZJJyi55sNxK-4lvIc-Ru7k2Q';
    let embedQuery =`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Eitminų+g.+20,+Vilnius,+12118+Vilniaus+m.+sav.`

</script>

<style>
    iframe{

        height: 80%;
    }
</style>

<iframe
        title="map"
        style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src={embedQuery}>
</iframe>