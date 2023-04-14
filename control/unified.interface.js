const _extensions = ['HMI'];
const _timeout = 1000;
const _contract = {
    methods: {},
    events: [],
    properties: {
        'Data': [],
        'SeriesColor': '',
        'BackgroundColor': ''
    }
};

var UnifiedInterface = function () {
    var _initialize = function () {
        console.log('COMI-RadialChart: UnifiedInterface initialized');
    };

    var _setProps = function (data) {
        console.log('COMI-RadialChart: Key <', data.key, '>');
        if (data.key === 'Data') {
            console.log('updateSeries!');
            chartInit(WebCC.Properties);
        } else {
            chartInit(WebCC.Properties);
        }
    };

    return {
        Local: {
            initialize: _initialize,
            setProps: _setProps
        },
        HostListener: _contract
    };
}();

var unifiedInterfaceInit = function () {
    // Initialize 
    UnifiedInterface.Local.initialize();

    // Subscribe for value changes
    if (WebCC && WebCC.onPropertyChanged) {
        WebCC.onPropertyChanged.subscribe(UnifiedInterface.Local.setProps);
    }
};