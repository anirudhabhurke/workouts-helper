module.exports = {
      setTimeoutSync: (callback, ms) => {
            const start = Date.now();
            let now = start;

            while (now - start < ms) {
                  now = Date.now();
            }

            if (typeof callback === 'function') {
                  callback();
            }
      },
      formatTime: (time) => {
            var hrs = ~~(time / 3600);
            var mins = ~~((time % 3600) / 60);
            var secs = ~~time % 60;

            var ret = '';
            if (hrs > 0) {
                  ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
            }
            ret += '' + mins + ':' + (secs < 10 ? '0' : '');
            ret += '' + secs;
            return ret;
      },
};
