/**
 * Created by Pasidu on 5/3/2015.
 */
app.directive("lkSelectedFile", [function () {
    return {
        scope: {
            lkSelectedFile: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.lkSelectedFile = changeEvent.target.files[0];
                });


            });
        }
    };
}]);


app.directive("lkSelected", [function () {
    return {
        scope: {
            lkSelected: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.lkSelected = { file : changeEvent.target.files[0]};
                });

                var reader = new FileReader();
                reader.onload = function (evt) {
                    scope.$apply(function(){
                        scope.lkSelected = { DataURL : evt.target.result};
                    });
                };
                reader.readAsDataURL(changeEvent.target.files[0]);

            });
        }
    };
}]);