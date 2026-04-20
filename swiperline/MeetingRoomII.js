// Given a array of intervals [[si,ei]].
// si is the start time of a meeting and ei is the end time of a meeting
// return how many meeting rooms we need to accommodate these meetings
// https://www.bilibili.com/s/video/BV1DK4y1R7H8
function meetingRoomII(intervals) {
    const starts = [];
    const ends = [];

    intervals.forEach(interval => {
        starts.push(interval[0]);
        ends.push(interval[1]);
    })

    starts.sort((a,b) => a - b);
    ends.sort((a ,b) => a - b);

    let i = 0, j = 0, current = 0, max = 0;
    while(i < intervals.length) {
        if (starts[i] < ends[j]) {
            current++;
            max = Math.max(max, current);
            i++;
            continue;
        }
        if (starts[i] > ends[j]) {
            current--;
            j++;
            continue;
        }
        i++;
        j++;
    }

    return max;
}

// 构造一串节点根据在时间线上，依次扫描
function solution2(intervals) {
    const points = [];
    intervals.forEach(interval => {
        points.push({
            isStartPoint: true,
            value: interval[0]
        })
        points.push({
            isStartPoint: false,
            value: interval[1]
        })
    })
    points.sort((a,b) => a.value - b.value);
    let current = 0, max = 0;
    for(let i = 0; i < points.length; i++) {
        if (points[i].isStartPoint) {
            current++;
            max = Math.max(max, current);
        } else {
            current--;
        }
    }

    return max;
}
console.log(meetingRoomII([[0, 10], [1,5], [4,7]]));
console.log(solution2([[0, 4], [5,6], [6,7]]))