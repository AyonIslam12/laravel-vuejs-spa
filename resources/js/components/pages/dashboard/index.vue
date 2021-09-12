<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard Component</div>

                    <div class="card-body">
                      {{ get_message }} {{get_user.name  }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters} from "vuex";
    export default {
        computed: {
        ...mapGetters([
            'get_message',
            'get_user',
        ]),
    }


    }
</script>
