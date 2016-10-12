angular.module('UploadService', []).factory('uploader', ['$http', function ($http) {
    return {
        uploadFileToUrl : function(file, uploadUrl, success, error){
            var fd = new FormData();
            fd.append('file', file);
            return $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined},
                responseType: 'blob'
            });
        }
    };
}]);
