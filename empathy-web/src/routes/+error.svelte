<script lang="ts">
    import { page } from '$app/state';

    let statusMessage = page.status === 404
        ? 'Page not found'
        : '';

</script>

<h1>{statusMessage}</h1>