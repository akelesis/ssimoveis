<template>
    <div class="footer">
        <h3>Entre em Contato:</h3>
        <ul class="contact">
            <li><i class="fab fa-instagram"></i> @ssconsultoria</li>
            <li><i class="fab fa-whatsapp"></i> (77) 98844-3610</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    @import url(http://allfont.net/allfont.css?fonts=agency-fb);

    .footer{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        padding-top: 20px;
        height: 140px;
        background-color: #555;
        bottom: 0;
        font-family: "Agency FB", arial;
    }

    .footer h3{
        color: #bbb;
        width: 98vw;
    }

    .contact{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
    }


    .contact li{
        color: #fff;
        margin: 10px;
    }

    .contact i{
        font-size: 20px;
        margin-right: 5px;
    }

</style>
