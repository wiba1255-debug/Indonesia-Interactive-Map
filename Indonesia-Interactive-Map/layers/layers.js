var wms_layers = [];

var format_InodonesiaLand_0 = new ol.format.GeoJSON();
var features_InodonesiaLand_0 = format_InodonesiaLand_0.readFeatures(json_InodonesiaLand_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InodonesiaLand_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InodonesiaLand_0.addFeatures(features_InodonesiaLand_0);
var lyr_InodonesiaLand_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InodonesiaLand_0, 
                style: style_InodonesiaLand_0,
                popuplayertitle: 'Inodonesia Land ',
                interactive: true,
                title: '<img src="styles/legend/InodonesiaLand_0.png" /> Inodonesia Land '
            });
var lyr_Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indonesia_Longline_Fishing_Combined — Indonesia_Longline_Fishing_2023-2025_Partial.tif<br />\
    <img src="styles/legend/Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1_0.png" /> 0.0000<br />\
    <img src="styles/legend/Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1_1.png" /> 5.6164<br />\
    <img src="styles/legend/Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1_2.png" /> 17.3198<br />\
    <img src="styles/legend/Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1_3.png" /> 45.6079<br />\
    <img src="styles/legend/Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1_4.png" /> 2974.2169<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10246959.127521, -1568480.802181, 15712746.125471, 741942.266018]
        })
    });
var lyr_Indonesia_Fishing_Vessel_Presence_Combined_20232025_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indonesia_Fishing_Vessel_Presence_Combined_2023-2025<br />\
    <img src="styles/legend/Indonesia_Fishing_Vessel_Presence_Combined_20232025_2_0.png" /> <= 3.0406<br />\
    <img src="styles/legend/Indonesia_Fishing_Vessel_Presence_Combined_20232025_2_1.png" /> 3.0406 - 10.1827<br />\
    <img src="styles/legend/Indonesia_Fishing_Vessel_Presence_Combined_20232025_2_2.png" /> 10.1827 - 26.5076<br />\
    <img src="styles/legend/Indonesia_Fishing_Vessel_Presence_Combined_20232025_2_3.png" /> 26.5076 - 100.9897<br />\
    <img src="styles/legend/Indonesia_Fishing_Vessel_Presence_Combined_20232025_2_4.png" /> > 100.9897<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Indonesia_Fishing_Vessel_Presence_Combined_20232025_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10246959.127521, -1568480.802181, 15735010.023629, 876604.809389]
        })
    });
var lyr_Indonesia_Trawling_Combined_20232025_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indonesia_Trawling_Combined_2023-2025<br />\
    <img src="styles/legend/Indonesia_Trawling_Combined_20232025_3_0.png" /> 0.0069<br />\
    <img src="styles/legend/Indonesia_Trawling_Combined_20232025_3_1.png" /> 3.4412<br />\
    <img src="styles/legend/Indonesia_Trawling_Combined_20232025_3_2.png" /> 13.3761<br />\
    <img src="styles/legend/Indonesia_Trawling_Combined_20232025_3_3.png" /> 48.2095<br />\
    <img src="styles/legend/Indonesia_Trawling_Combined_20232025_3_4.png" /> 9635.0043<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Indonesia_Trawling_Combined_20232025_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10324882.771076, -1079348.150150, 15657086.380074, 753150.763305]
        })
    });
var format_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4 = new ol.format.GeoJSON();
var features_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4 = format_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4.readFeatures(json_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4.addFeatures(features_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4);
var lyr_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4, 
                style: style_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4,
                popuplayertitle: 'Indonesia_OBIS_Bony_Fish_Teleostei_Grid — Bony_Fish_Teleostei',
                interactive: true,
    title: 'Indonesia_OBIS_Bony_Fish_Teleostei_Grid — Bony_Fish_Teleostei<br />\
    <img src="styles/legend/Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4_1.png" /> 1 - 3<br />\
    <img src="styles/legend/Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4_2.png" /> 3 - 11<br />\
    <img src="styles/legend/Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4_3.png" /> 11 - 47.6<br />\
    <img src="styles/legend/Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4_4.png" /> 47.6 - 798<br />' });
var format_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5 = new ol.format.GeoJSON();
var features_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5 = format_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5.readFeatures(json_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5.addFeatures(features_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5);
var lyr_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5, 
                style: style_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5,
                popuplayertitle: 'Indonesia_OBIS_Corals_Anthozoa_Grid — Corals_Anthozoa',
                interactive: true,
    title: 'Indonesia_OBIS_Corals_Anthozoa_Grid — Corals_Anthozoa<br />\
    <img src="styles/legend/Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5_2.png" /> 2 - 6<br />\
    <img src="styles/legend/Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5_3.png" /> 6 - 21<br />\
    <img src="styles/legend/Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5_4.png" /> 21 - 255<br />' });
var format_Indonesia_OBIS_Crustaceans_GridCrustaceans_6 = new ol.format.GeoJSON();
var features_Indonesia_OBIS_Crustaceans_GridCrustaceans_6 = format_Indonesia_OBIS_Crustaceans_GridCrustaceans_6.readFeatures(json_Indonesia_OBIS_Crustaceans_GridCrustaceans_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_OBIS_Crustaceans_GridCrustaceans_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_OBIS_Crustaceans_GridCrustaceans_6.addFeatures(features_Indonesia_OBIS_Crustaceans_GridCrustaceans_6);
var lyr_Indonesia_OBIS_Crustaceans_GridCrustaceans_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia_OBIS_Crustaceans_GridCrustaceans_6, 
                style: style_Indonesia_OBIS_Crustaceans_GridCrustaceans_6,
                popuplayertitle: 'Indonesia_OBIS_Crustaceans_Grid — Crustaceans',
                interactive: true,
    title: 'Indonesia_OBIS_Crustaceans_Grid — Crustaceans<br />\
    <img src="styles/legend/Indonesia_OBIS_Crustaceans_GridCrustaceans_6_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Indonesia_OBIS_Crustaceans_GridCrustaceans_6_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Indonesia_OBIS_Crustaceans_GridCrustaceans_6_2.png" /> 2 - 5<br />\
    <img src="styles/legend/Indonesia_OBIS_Crustaceans_GridCrustaceans_6_3.png" /> 5 - 14<br />\
    <img src="styles/legend/Indonesia_OBIS_Crustaceans_GridCrustaceans_6_4.png" /> 14 - 256<br />' });
var format_Indonesia_OBIS_Mollusks_GridMollusks_7 = new ol.format.GeoJSON();
var features_Indonesia_OBIS_Mollusks_GridMollusks_7 = format_Indonesia_OBIS_Mollusks_GridMollusks_7.readFeatures(json_Indonesia_OBIS_Mollusks_GridMollusks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_OBIS_Mollusks_GridMollusks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_OBIS_Mollusks_GridMollusks_7.addFeatures(features_Indonesia_OBIS_Mollusks_GridMollusks_7);
var lyr_Indonesia_OBIS_Mollusks_GridMollusks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia_OBIS_Mollusks_GridMollusks_7, 
                style: style_Indonesia_OBIS_Mollusks_GridMollusks_7,
                popuplayertitle: 'Indonesia_OBIS_Mollusks_Grid — Mollusks',
                interactive: true,
    title: 'Indonesia_OBIS_Mollusks_Grid — Mollusks<br />\
    <img src="styles/legend/Indonesia_OBIS_Mollusks_GridMollusks_7_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Indonesia_OBIS_Mollusks_GridMollusks_7_1.png" /> 1 - 1<br />\
    <img src="styles/legend/Indonesia_OBIS_Mollusks_GridMollusks_7_2.png" /> 1 - 4<br />\
    <img src="styles/legend/Indonesia_OBIS_Mollusks_GridMollusks_7_3.png" /> 4 - 16<br />\
    <img src="styles/legend/Indonesia_OBIS_Mollusks_GridMollusks_7_4.png" /> 16 - 814<br />' });
var format_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8 = new ol.format.GeoJSON();
var features_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8 = format_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8.readFeatures(json_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8.addFeatures(features_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8);
var lyr_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8, 
                style: style_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8,
                popuplayertitle: 'Indonesia_OBIS_Sharks_Rays_Elasmobranchii_Grid — Sharks_Rays_Elasmobranchii',
                interactive: true,
    title: 'Indonesia_OBIS_Sharks_Rays_Elasmobranchii_Grid — Sharks_Rays_Elasmobranchii<br />\
    <img src="styles/legend/Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8_0.png" /> 1 - 1<br />\
    <img src="styles/legend/Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8_1.png" /> 1 - 1<br />\
    <img src="styles/legend/Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8_2.png" /> 1 - 2<br />\
    <img src="styles/legend/Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8_3.png" /> 2 - 4<br />\
    <img src="styles/legend/Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8_4.png" /> 4 - 18<br />' });

lyr_InodonesiaLand_0.setVisible(true);lyr_Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1.setVisible(true);lyr_Indonesia_Fishing_Vessel_Presence_Combined_20232025_2.setVisible(true);lyr_Indonesia_Trawling_Combined_20232025_3.setVisible(true);lyr_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4.setVisible(true);lyr_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5.setVisible(true);lyr_Indonesia_OBIS_Crustaceans_GridCrustaceans_6.setVisible(true);lyr_Indonesia_OBIS_Mollusks_GridMollusks_7.setVisible(true);lyr_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8.setVisible(true);
var layersList = [lyr_InodonesiaLand_0,lyr_Indonesia_Longline_Fishing_CombinedIndonesia_Longline_Fishing_20232025_Partialtif_1,lyr_Indonesia_Fishing_Vessel_Presence_Combined_20232025_2,lyr_Indonesia_Trawling_Combined_20232025_3,lyr_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4,lyr_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5,lyr_Indonesia_OBIS_Crustaceans_GridCrustaceans_6,lyr_Indonesia_OBIS_Mollusks_GridMollusks_7,lyr_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8];
lyr_InodonesiaLand_0.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'TLC': 'TLC', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'POP_YEAR': 'POP_YEAR', 'GDP_MD': 'GDP_MD', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10': 'FIPS_10', 'ISO_A2': 'ISO_A2', 'ISO_A2_EH': 'ISO_A2_EH', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'ISO_N3_EH': 'ISO_N3_EH', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_ISO': 'ADM0_ISO', 'ADM0_DIFF': 'ADM0_DIFF', 'ADM0_TLC': 'ADM0_TLC', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_FR': 'ADM0_A3_FR', 'ADM0_A3_RU': 'ADM0_A3_RU', 'ADM0_A3_ES': 'ADM0_A3_ES', 'ADM0_A3_CN': 'ADM0_A3_CN', 'ADM0_A3_TW': 'ADM0_A3_TW', 'ADM0_A3_IN': 'ADM0_A3_IN', 'ADM0_A3_NP': 'ADM0_A3_NP', 'ADM0_A3_PK': 'ADM0_A3_PK', 'ADM0_A3_DE': 'ADM0_A3_DE', 'ADM0_A3_GB': 'ADM0_A3_GB', 'ADM0_A3_BR': 'ADM0_A3_BR', 'ADM0_A3_IL': 'ADM0_A3_IL', 'ADM0_A3_PS': 'ADM0_A3_PS', 'ADM0_A3_SA': 'ADM0_A3_SA', 'ADM0_A3_EG': 'ADM0_A3_EG', 'ADM0_A3_MA': 'ADM0_A3_MA', 'ADM0_A3_PT': 'ADM0_A3_PT', 'ADM0_A3_AR': 'ADM0_A3_AR', 'ADM0_A3_JP': 'ADM0_A3_JP', 'ADM0_A3_KO': 'ADM0_A3_KO', 'ADM0_A3_VN': 'ADM0_A3_VN', 'ADM0_A3_TR': 'ADM0_A3_TR', 'ADM0_A3_ID': 'ADM0_A3_ID', 'ADM0_A3_PL': 'ADM0_A3_PL', 'ADM0_A3_GR': 'ADM0_A3_GR', 'ADM0_A3_IT': 'ADM0_A3_IT', 'ADM0_A3_NL': 'ADM0_A3_NL', 'ADM0_A3_SE': 'ADM0_A3_SE', 'ADM0_A3_BD': 'ADM0_A3_BD', 'ADM0_A3_UA': 'ADM0_A3_UA', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'LABEL_X': 'LABEL_X', 'LABEL_Y': 'LABEL_Y', 'NE_ID': 'NE_ID', 'WIKIDATAID': 'WIKIDATAID', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FA': 'NAME_FA', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HE': 'NAME_HE', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_UK': 'NAME_UK', 'NAME_UR': 'NAME_UR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'NAME_ZHT': 'NAME_ZHT', 'FCLASS_ISO': 'FCLASS_ISO', 'TLC_DIFF': 'TLC_DIFF', 'FCLASS_TLC': 'FCLASS_TLC', 'FCLASS_US': 'FCLASS_US', 'FCLASS_FR': 'FCLASS_FR', 'FCLASS_RU': 'FCLASS_RU', 'FCLASS_ES': 'FCLASS_ES', 'FCLASS_CN': 'FCLASS_CN', 'FCLASS_TW': 'FCLASS_TW', 'FCLASS_IN': 'FCLASS_IN', 'FCLASS_NP': 'FCLASS_NP', 'FCLASS_PK': 'FCLASS_PK', 'FCLASS_DE': 'FCLASS_DE', 'FCLASS_GB': 'FCLASS_GB', 'FCLASS_BR': 'FCLASS_BR', 'FCLASS_IL': 'FCLASS_IL', 'FCLASS_PS': 'FCLASS_PS', 'FCLASS_SA': 'FCLASS_SA', 'FCLASS_EG': 'FCLASS_EG', 'FCLASS_MA': 'FCLASS_MA', 'FCLASS_PT': 'FCLASS_PT', 'FCLASS_AR': 'FCLASS_AR', 'FCLASS_JP': 'FCLASS_JP', 'FCLASS_KO': 'FCLASS_KO', 'FCLASS_VN': 'FCLASS_VN', 'FCLASS_TR': 'FCLASS_TR', 'FCLASS_ID': 'FCLASS_ID', 'FCLASS_PL': 'FCLASS_PL', 'FCLASS_GR': 'FCLASS_GR', 'FCLASS_IT': 'FCLASS_IT', 'FCLASS_NL': 'FCLASS_NL', 'FCLASS_SE': 'FCLASS_SE', 'FCLASS_BD': 'FCLASS_BD', 'FCLASS_UA': 'FCLASS_UA', });
lyr_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4.set('fieldAliases', {'fid': 'fid', 'group': 'group', 'observations': 'observations', 'species_richness': 'species_richness', });
lyr_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5.set('fieldAliases', {'fid': 'fid', 'group': 'group', 'observations': 'observations', 'species_richness': 'species_richness', });
lyr_Indonesia_OBIS_Crustaceans_GridCrustaceans_6.set('fieldAliases', {'fid': 'fid', 'group': 'group', 'observations': 'observations', 'species_richness': 'species_richness', });
lyr_Indonesia_OBIS_Mollusks_GridMollusks_7.set('fieldAliases', {'fid': 'fid', 'group': 'group', 'observations': 'observations', 'species_richness': 'species_richness', });
lyr_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8.set('fieldAliases', {'fid': 'fid', 'group': 'group', 'observations': 'observations', 'species_richness': 'species_richness', });
lyr_InodonesiaLand_0.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'TLC': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'POP_YEAR': 'Range', 'GDP_MD': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A2_EH': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'ISO_N3_EH': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_ISO': 'TextEdit', 'ADM0_DIFF': 'TextEdit', 'ADM0_TLC': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_FR': 'TextEdit', 'ADM0_A3_RU': 'TextEdit', 'ADM0_A3_ES': 'TextEdit', 'ADM0_A3_CN': 'TextEdit', 'ADM0_A3_TW': 'TextEdit', 'ADM0_A3_IN': 'TextEdit', 'ADM0_A3_NP': 'TextEdit', 'ADM0_A3_PK': 'TextEdit', 'ADM0_A3_DE': 'TextEdit', 'ADM0_A3_GB': 'TextEdit', 'ADM0_A3_BR': 'TextEdit', 'ADM0_A3_IL': 'TextEdit', 'ADM0_A3_PS': 'TextEdit', 'ADM0_A3_SA': 'TextEdit', 'ADM0_A3_EG': 'TextEdit', 'ADM0_A3_MA': 'TextEdit', 'ADM0_A3_PT': 'TextEdit', 'ADM0_A3_AR': 'TextEdit', 'ADM0_A3_JP': 'TextEdit', 'ADM0_A3_KO': 'TextEdit', 'ADM0_A3_VN': 'TextEdit', 'ADM0_A3_TR': 'TextEdit', 'ADM0_A3_ID': 'TextEdit', 'ADM0_A3_PL': 'TextEdit', 'ADM0_A3_GR': 'TextEdit', 'ADM0_A3_IT': 'TextEdit', 'ADM0_A3_NL': 'TextEdit', 'ADM0_A3_SE': 'TextEdit', 'ADM0_A3_BD': 'TextEdit', 'ADM0_A3_UA': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'LABEL_X': 'TextEdit', 'LABEL_Y': 'TextEdit', 'NE_ID': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FA': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HE': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_UK': 'TextEdit', 'NAME_UR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'NAME_ZHT': 'TextEdit', 'FCLASS_ISO': 'TextEdit', 'TLC_DIFF': 'TextEdit', 'FCLASS_TLC': 'TextEdit', 'FCLASS_US': 'TextEdit', 'FCLASS_FR': 'TextEdit', 'FCLASS_RU': 'TextEdit', 'FCLASS_ES': 'TextEdit', 'FCLASS_CN': 'TextEdit', 'FCLASS_TW': 'TextEdit', 'FCLASS_IN': 'TextEdit', 'FCLASS_NP': 'TextEdit', 'FCLASS_PK': 'TextEdit', 'FCLASS_DE': 'TextEdit', 'FCLASS_GB': 'TextEdit', 'FCLASS_BR': 'TextEdit', 'FCLASS_IL': 'TextEdit', 'FCLASS_PS': 'TextEdit', 'FCLASS_SA': 'TextEdit', 'FCLASS_EG': 'TextEdit', 'FCLASS_MA': 'TextEdit', 'FCLASS_PT': 'TextEdit', 'FCLASS_AR': 'TextEdit', 'FCLASS_JP': 'TextEdit', 'FCLASS_KO': 'TextEdit', 'FCLASS_VN': 'TextEdit', 'FCLASS_TR': 'TextEdit', 'FCLASS_ID': 'TextEdit', 'FCLASS_PL': 'TextEdit', 'FCLASS_GR': 'TextEdit', 'FCLASS_IT': 'TextEdit', 'FCLASS_NL': 'TextEdit', 'FCLASS_SE': 'TextEdit', 'FCLASS_BD': 'TextEdit', 'FCLASS_UA': 'TextEdit', });
lyr_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4.set('fieldImages', {'fid': 'TextEdit', 'group': 'TextEdit', 'observations': 'TextEdit', 'species_richness': 'TextEdit', });
lyr_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5.set('fieldImages', {'fid': 'TextEdit', 'group': 'TextEdit', 'observations': 'TextEdit', 'species_richness': 'TextEdit', });
lyr_Indonesia_OBIS_Crustaceans_GridCrustaceans_6.set('fieldImages', {'fid': 'TextEdit', 'group': 'TextEdit', 'observations': 'TextEdit', 'species_richness': 'TextEdit', });
lyr_Indonesia_OBIS_Mollusks_GridMollusks_7.set('fieldImages', {'fid': 'TextEdit', 'group': 'TextEdit', 'observations': 'TextEdit', 'species_richness': 'TextEdit', });
lyr_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8.set('fieldImages', {'fid': 'TextEdit', 'group': 'TextEdit', 'observations': 'TextEdit', 'species_richness': 'TextEdit', });
lyr_InodonesiaLand_0.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'TLC': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'POP_YEAR': 'no label', 'GDP_MD': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'FIPS_10': 'no label', 'ISO_A2': 'no label', 'ISO_A2_EH': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'ISO_N3_EH': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_ISO': 'no label', 'ADM0_DIFF': 'no label', 'ADM0_TLC': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_FR': 'no label', 'ADM0_A3_RU': 'no label', 'ADM0_A3_ES': 'no label', 'ADM0_A3_CN': 'no label', 'ADM0_A3_TW': 'no label', 'ADM0_A3_IN': 'no label', 'ADM0_A3_NP': 'no label', 'ADM0_A3_PK': 'no label', 'ADM0_A3_DE': 'no label', 'ADM0_A3_GB': 'no label', 'ADM0_A3_BR': 'no label', 'ADM0_A3_IL': 'no label', 'ADM0_A3_PS': 'no label', 'ADM0_A3_SA': 'no label', 'ADM0_A3_EG': 'no label', 'ADM0_A3_MA': 'no label', 'ADM0_A3_PT': 'no label', 'ADM0_A3_AR': 'no label', 'ADM0_A3_JP': 'no label', 'ADM0_A3_KO': 'no label', 'ADM0_A3_VN': 'no label', 'ADM0_A3_TR': 'no label', 'ADM0_A3_ID': 'no label', 'ADM0_A3_PL': 'no label', 'ADM0_A3_GR': 'no label', 'ADM0_A3_IT': 'no label', 'ADM0_A3_NL': 'no label', 'ADM0_A3_SE': 'no label', 'ADM0_A3_BD': 'no label', 'ADM0_A3_UA': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', 'LABEL_X': 'no label', 'LABEL_Y': 'no label', 'NE_ID': 'no label', 'WIKIDATAID': 'no label', 'NAME_AR': 'no label', 'NAME_BN': 'no label', 'NAME_DE': 'no label', 'NAME_EN': 'no label', 'NAME_ES': 'no label', 'NAME_FA': 'no label', 'NAME_FR': 'no label', 'NAME_EL': 'no label', 'NAME_HE': 'no label', 'NAME_HI': 'no label', 'NAME_HU': 'no label', 'NAME_ID': 'no label', 'NAME_IT': 'no label', 'NAME_JA': 'no label', 'NAME_KO': 'no label', 'NAME_NL': 'no label', 'NAME_PL': 'no label', 'NAME_PT': 'no label', 'NAME_RU': 'no label', 'NAME_SV': 'no label', 'NAME_TR': 'no label', 'NAME_UK': 'no label', 'NAME_UR': 'no label', 'NAME_VI': 'no label', 'NAME_ZH': 'no label', 'NAME_ZHT': 'no label', 'FCLASS_ISO': 'no label', 'TLC_DIFF': 'no label', 'FCLASS_TLC': 'no label', 'FCLASS_US': 'no label', 'FCLASS_FR': 'no label', 'FCLASS_RU': 'no label', 'FCLASS_ES': 'no label', 'FCLASS_CN': 'no label', 'FCLASS_TW': 'no label', 'FCLASS_IN': 'no label', 'FCLASS_NP': 'no label', 'FCLASS_PK': 'no label', 'FCLASS_DE': 'no label', 'FCLASS_GB': 'no label', 'FCLASS_BR': 'no label', 'FCLASS_IL': 'no label', 'FCLASS_PS': 'no label', 'FCLASS_SA': 'no label', 'FCLASS_EG': 'no label', 'FCLASS_MA': 'no label', 'FCLASS_PT': 'no label', 'FCLASS_AR': 'no label', 'FCLASS_JP': 'no label', 'FCLASS_KO': 'no label', 'FCLASS_VN': 'no label', 'FCLASS_TR': 'no label', 'FCLASS_ID': 'no label', 'FCLASS_PL': 'no label', 'FCLASS_GR': 'no label', 'FCLASS_IT': 'no label', 'FCLASS_NL': 'no label', 'FCLASS_SE': 'no label', 'FCLASS_BD': 'no label', 'FCLASS_UA': 'no label', });
lyr_Indonesia_OBIS_Bony_Fish_Teleostei_GridBony_Fish_Teleostei_4.set('fieldLabels', {'fid': 'no label', 'group': 'no label', 'observations': 'no label', 'species_richness': 'no label', });
lyr_Indonesia_OBIS_Corals_Anthozoa_GridCorals_Anthozoa_5.set('fieldLabels', {'fid': 'no label', 'group': 'no label', 'observations': 'no label', 'species_richness': 'no label', });
lyr_Indonesia_OBIS_Crustaceans_GridCrustaceans_6.set('fieldLabels', {'fid': 'no label', 'group': 'no label', 'observations': 'no label', 'species_richness': 'no label', });
lyr_Indonesia_OBIS_Mollusks_GridMollusks_7.set('fieldLabels', {'fid': 'no label', 'group': 'no label', 'observations': 'no label', 'species_richness': 'no label', });
lyr_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8.set('fieldLabels', {'fid': 'no label', 'group': 'no label', 'observations': 'no label', 'species_richness': 'no label', });
lyr_Indonesia_OBIS_Sharks_Rays_Elasmobranchii_GridSharks_Rays_Elasmobranchii_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});