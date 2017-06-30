<template>
    <!-- Intro Header --><div class="intro-header">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>Service Fusion</h1>
                        <h3>Persons App</h3>
                        <p>By Garrett Schroath</p>
                        <hr class="intro-divider">
                        <ul class="list-inline intro-social-buttons">                            
                            <li>                                
                                <router-link to="/Persons" class="btn btn-default btn-lg"><i class="fa fa-users fa-fw"></i> <span class="network-name"> Go to Persons</span></router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.container -->
    </div>
</template>

<script>
export default {
  name: 'intro-section'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
