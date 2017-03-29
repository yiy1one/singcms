$('#button-add').click(function () {
    var url = SCOPE.add_url;
    window.location.href = url;
});

$('#singcms-button-submit').click(function(){
    var data = $('#singcms-form').serializeArray();
    postData = {};
    $(data).each(function(i){
        postData[this.name] = this.value;

    });

    url = SCOPE.save_url;
    jump_url = SCOPE.jump_url;
    $.post(url,postData,function (result) {
        if(result.status == 1){
            return dialog.success(result.message,jump_url);
        }else if(result.status == 0){
            return dialog.error(result.message);
        }
    },'JSON');
});

$('.singcms-table #singcms-edit').on('click',function(){
    var id = $(this).attr('attr-id');
    var url = SCOPE.edit_url;
});