<template>
    <div class="actions-page">
        <div class="action" id="action-01">
            <img class="img-action" src="../assets/imgs/banner5.jpg" alt="">
            <div class="action-text">
                <h3>Campus Vivant</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque suscipit cursus. Fusce sed enim nunc. 
                    Maecenas bibendum interdum imperdiet. Suspendisse potenti. Vivamus ultrices elit sed sagittis tincidunt. Suspendisse 
                    non egestas elit, et hendrerit est. Duis eu purus lectus. Quisque volutpat est arcu, vel tincidunt ligula ornare feugiat. 
                    Etiam enim nisi, ornare ultricies mauris a, commodo convallis purus. Donec mauris elit, aliquam ac tempor eu, varius sit amet dui. 
                    Nullam condimentum ante tristique, bibendum purus sit amet, sodales nisi. Donec volutpat dolor a hendrerit ullamcorper. 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque suscipit cursus. Fusce sed enim nunc. 
                    Maecenas bibendum interdum imperdiet. Suspendisse potenti. Vivamus ultrices elit sed sagittis tincidunt. Suspendisse 
                    non egestas elit.
                </p>
                <button class="wpp-btn">SAIBA MAIS</button>
            </div>
        </div>
        <div class="action" id="action-02">
            <div class="action-text">
                <h3>Dona Olívia</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque suscipit cursus. Fusce sed enim nunc. 
                    Maecenas bibendum interdum imperdiet. Suspendisse potenti. Vivamus ultrices elit sed sagittis tincidunt. Suspendisse 
                    non egestas elit, et hendrerit est. Duis eu purus lectus. Quisque volutpat est arcu, vel tincidunt ligula ornare feugiat. 
                    Etiam enim nisi, ornare ultricies mauris a, commodo convallis purus. Donec mauris elit, aliquam ac tempor eu, varius sit amet dui. 
                    Nullam condimentum ante tristique, bibendum purus sit amet, sodales nisi. Donec volutpat dolor a hendrerit ullamcorper. 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque suscipit cursus. Fusce sed enim nunc. 
                    Maecenas bibendum interdum imperdiet. Suspendisse potenti. Vivamus ultrices elit sed sagittis tincidunt. Suspendisse 
                    non egestas elit.
                </p>
                <button class="wpp-btn">SAIBA MAIS</button>
            </div>
            <img class="img-action" src="../assets/imgs/donaOlivia.png" alt="">
        </div>
        <div class="action" id="action-03">
            <img class="img-action" src="../assets/imgs/lord.png" alt="">
            <div class="action-text">
                <h3>Lord Residence</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque suscipit cursus. Fusce sed enim nunc. 
                    Maecenas bibendum interdum imperdiet. Suspendisse potenti. Vivamus ultrices elit sed sagittis tincidunt. Suspendisse 
                    non egestas elit, et hendrerit est. Duis eu purus lectus. Quisque volutpat est arcu, vel tincidunt ligula ornare feugiat. 
                    Etiam enim nisi, ornare ultricies mauris a, commodo convallis purus. Donec mauris elit, aliquam ac tempor eu, varius sit amet dui. 
                    Nullam condimentum ante tristique, bibendum purus sit amet, sodales nisi. Donec volutpat dolor a hendrerit ullamcorper. 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque suscipit cursus. Fusce sed enim nunc. 
                    Maecenas bibendum interdum imperdiet. Suspendisse potenti. Vivamus ultrices elit sed sagittis tincidunt. Suspendisse 
                    non egestas elit.
                </p>
                <button class="wpp-btn">SAIBA MAIS</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    /* .actions-page{
        height: 100vh;
        
    } */

    .action{
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
    }

    #action-01{
        background-color: rgb(242,242,242);
    }

    #action-02{
        background-color: #fff;
        justify-content: space-between;
    }

    #action-03{
        background-color: #ccc;
    }

    .img-action{
        width: 60vw;
        height: 700px;
        justify-self: flex-start;
    }

    .action-text{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 30vw;
        margin-left: 50px;
        margin-top: 50px;
        justify-self: flex-end;
        justify-content: center;
        text-align: justify;
        font-family: "Agency FB", arial;
    }

    .action-text h3{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
        text-align: justify;
        width: 100%;
    }

    .action-text p{
        font-size: 20px;
    }

    .wpp-btn{
        border: none;
        background-color: rgb(16,193,66);
        margin-bottom: 10px;
        width: 30vw;
        height: 50px;
        color: #fff;
        font-size: 20px;
        border-radius: 5px;
    }

@media screen and (max-width: 580px){
    .img-action{
        width: 100vw;
        height: 300px;
        margin: 10px 0;
    }

    .action-text{
        width: 100vw;
    }

    .wpp-btn{
        width: 70vw;
    }
}
</style>
