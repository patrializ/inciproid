//     function getTouches(evt) {
        var touches = evt.touches;
        if (touches) {
            for (var i = 0; i < touches.length; i++) {
                var touch = touches[i];
                touch.identifier = touch.identifier || 0;
            }
            return touches;
        }
        return evt.changedTouches || evt.targetTouches;
    }
