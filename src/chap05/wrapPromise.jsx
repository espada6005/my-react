export default function wrapPromise(promise) {
    let status = 'pending';
    let data;
    let wrapper = promise.then(
        result => {
            status = 'fullfilled';
            data = result;
        },
        e => {
            status = 'rejected';
            data = e;
        }
    );
    return {
        get() {
            switch (status) {
                case 'fullfilled':
                    return data;
                case 'rejected':
                    throw data;
                case 'pending':
                    throw wrapper;
                default:
                    break;
            }
        }
    };
}
