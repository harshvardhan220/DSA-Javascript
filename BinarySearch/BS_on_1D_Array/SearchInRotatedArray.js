var search = function (arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) return mid;

        if (arr[low] <= arr[mid]) { // Check if left half is sorted or not
            if (arr[low] <= target && target <= arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        else { // Check if right half is sorted or not
            if (arr[mid] <= target && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
};