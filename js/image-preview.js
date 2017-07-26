Object.defineProperty(Object.prototype, 'previewInit',{
  value : function(customAtr = false) {
            options = {container : $(this), name : 'image_file', placeholder:"http://placehold.it/300x300"};
        if (customAtr) {
            for (var attrname in customAtr) { options[attrname] = customAtr[attrname];}
        }
        options.container.append('<input type="file" name="'+options.name+'" id="'+options.name+'" class="hidden" accept="image/*" >')
        options.container.append('<label for="'+options.name+'" class="label-pos"><img src="'+options.placeholder+'" class="img-placeholder img-responsive img-thumbnail"><span class="edit-icon"><i class="fa fa-pencil"></i></span></label>')

        options.container.find('#'+options.name).on('change', function(e) {
            e.preventDefault()
            var file = new FileReader();
            var container = $(this).parent();
            var image = $(this).prop('files')[0];
            file.onload = function() {
                container.find('img').attr('src', file.result);
            }
            if (image) {
                file.readAsDataURL(image);
            }
        })
  },
  enumerable : false
});
