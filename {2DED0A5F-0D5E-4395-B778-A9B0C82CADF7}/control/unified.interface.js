const _extensions = ['HMI'];
const _timeout = 1000;
const _contract = {
    methods: {},
    events: [],
    properties: {
        'Data': [],
        'SeriesColor': 4279491983,
        'BackgroundColor': 4294967295,
        'LineType': 'Smooth',
        'ChartType': 'Area'
    }
};

var UnifiedInterface = function () {
    var _initialize = function () {
        console.log('CWC_AreaChartClean: UnifiedInterface initialized');
    };

    var _setProps = function (data) {
        console.log('CWC_AreaChartClean: Key <', data.key, '>');
        chartInit(WebCC.Properties);
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