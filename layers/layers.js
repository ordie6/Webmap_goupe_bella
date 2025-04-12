var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZoneEtude_1 = new ol.format.GeoJSON();
var features_ZoneEtude_1 = format_ZoneEtude_1.readFeatures(json_ZoneEtude_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneEtude_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneEtude_1.addFeatures(features_ZoneEtude_1);
var lyr_ZoneEtude_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneEtude_1, 
                style: style_ZoneEtude_1,
                popuplayertitle: 'Zone Etude',
                interactive: true,
                title: '<img src="styles/legend/ZoneEtude_1.png" /> Zone Etude'
            });
var format_Lac_2 = new ol.format.GeoJSON();
var features_Lac_2 = format_Lac_2.readFeatures(json_Lac_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lac_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lac_2.addFeatures(features_Lac_2);
var lyr_Lac_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lac_2, 
                style: style_Lac_2,
                popuplayertitle: 'Lac',
                interactive: true,
                title: '<img src="styles/legend/Lac_2.png" /> Lac'
            });
var format_Routeresidentielle_3 = new ol.format.GeoJSON();
var features_Routeresidentielle_3 = format_Routeresidentielle_3.readFeatures(json_Routeresidentielle_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routeresidentielle_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routeresidentielle_3.addFeatures(features_Routeresidentielle_3);
var lyr_Routeresidentielle_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routeresidentielle_3, 
                style: style_Routeresidentielle_3,
                popuplayertitle: 'Route residentielle',
                interactive: true,
                title: '<img src="styles/legend/Routeresidentielle_3.png" /> Route residentielle'
            });
var format_RouteTertiaire_4 = new ol.format.GeoJSON();
var features_RouteTertiaire_4 = format_RouteTertiaire_4.readFeatures(json_RouteTertiaire_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteTertiaire_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteTertiaire_4.addFeatures(features_RouteTertiaire_4);
var lyr_RouteTertiaire_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteTertiaire_4, 
                style: style_RouteTertiaire_4,
                popuplayertitle: 'Route Tertiaire',
                interactive: true,
                title: '<img src="styles/legend/RouteTertiaire_4.png" /> Route Tertiaire'
            });
var format_RouteSecondaire_5 = new ol.format.GeoJSON();
var features_RouteSecondaire_5 = format_RouteSecondaire_5.readFeatures(json_RouteSecondaire_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteSecondaire_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteSecondaire_5.addFeatures(features_RouteSecondaire_5);
var lyr_RouteSecondaire_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteSecondaire_5, 
                style: style_RouteSecondaire_5,
                popuplayertitle: 'Route Secondaire',
                interactive: true,
                title: '<img src="styles/legend/RouteSecondaire_5.png" /> Route Secondaire'
            });
var format_RoutePrimaire_6 = new ol.format.GeoJSON();
var features_RoutePrimaire_6 = format_RoutePrimaire_6.readFeatures(json_RoutePrimaire_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutePrimaire_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutePrimaire_6.addFeatures(features_RoutePrimaire_6);
var lyr_RoutePrimaire_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutePrimaire_6, 
                style: style_RoutePrimaire_6,
                popuplayertitle: 'Route Primaire',
                interactive: true,
                title: '<img src="styles/legend/RoutePrimaire_6.png" /> Route Primaire'
            });
var format_RouteNationale_7 = new ol.format.GeoJSON();
var features_RouteNationale_7 = format_RouteNationale_7.readFeatures(json_RouteNationale_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteNationale_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteNationale_7.addFeatures(features_RouteNationale_7);
var lyr_RouteNationale_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteNationale_7, 
                style: style_RouteNationale_7,
                popuplayertitle: 'Route Nationale',
                interactive: true,
                title: '<img src="styles/legend/RouteNationale_7.png" /> Route Nationale'
            });
var format_centreville_8 = new ol.format.GeoJSON();
var features_centreville_8 = format_centreville_8.readFeatures(json_centreville_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centreville_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centreville_8.addFeatures(features_centreville_8);
var lyr_centreville_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centreville_8, 
                style: style_centreville_8,
                popuplayertitle: 'centre ville',
                interactive: true,
                title: '<img src="styles/legend/centreville_8.png" /> centre ville'
            });
var format_Ecole_9 = new ol.format.GeoJSON();
var features_Ecole_9 = format_Ecole_9.readFeatures(json_Ecole_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecole_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecole_9.addFeatures(features_Ecole_9);
var lyr_Ecole_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecole_9, 
                style: style_Ecole_9,
                popuplayertitle: 'Ecole',
                interactive: true,
                title: '<img src="styles/legend/Ecole_9.png" /> Ecole'
            });
var format_Quartier_10 = new ol.format.GeoJSON();
var features_Quartier_10 = format_Quartier_10.readFeatures(json_Quartier_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartier_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartier_10.addFeatures(features_Quartier_10);
var lyr_Quartier_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quartier_10, 
                style: style_Quartier_10,
                popuplayertitle: 'Quartier',
                interactive: true,
                title: '<img src="styles/legend/Quartier_10.png" /> Quartier'
            });
var format_Pharmacie_11 = new ol.format.GeoJSON();
var features_Pharmacie_11 = format_Pharmacie_11.readFeatures(json_Pharmacie_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacie_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacie_11.addFeatures(features_Pharmacie_11);
var lyr_Pharmacie_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacie_11, 
                style: style_Pharmacie_11,
                popuplayertitle: 'Pharmacie',
                interactive: true,
                title: '<img src="styles/legend/Pharmacie_11.png" /> Pharmacie'
            });
var format_March_12 = new ol.format.GeoJSON();
var features_March_12 = format_March_12.readFeatures(json_March_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_March_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_March_12.addFeatures(features_March_12);
var lyr_March_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_March_12, 
                style: style_March_12,
                popuplayertitle: 'Marché',
                interactive: true,
                title: '<img src="styles/legend/March_12.png" /> Marché'
            });
var format_Hotel_13 = new ol.format.GeoJSON();
var features_Hotel_13 = format_Hotel_13.readFeatures(json_Hotel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_13.addFeatures(features_Hotel_13);
var lyr_Hotel_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_13, 
                style: style_Hotel_13,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_13.png" /> Hotel'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZoneEtude_1.setVisible(true);lyr_Lac_2.setVisible(true);lyr_Routeresidentielle_3.setVisible(true);lyr_RouteTertiaire_4.setVisible(true);lyr_RouteSecondaire_5.setVisible(true);lyr_RoutePrimaire_6.setVisible(true);lyr_RouteNationale_7.setVisible(true);lyr_centreville_8.setVisible(true);lyr_Ecole_9.setVisible(true);lyr_Quartier_10.setVisible(true);lyr_Pharmacie_11.setVisible(true);lyr_March_12.setVisible(true);lyr_Hotel_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZoneEtude_1,lyr_Lac_2,lyr_Routeresidentielle_3,lyr_RouteTertiaire_4,lyr_RouteSecondaire_5,lyr_RoutePrimaire_6,lyr_RouteNationale_7,lyr_centreville_8,lyr_Ecole_9,lyr_Quartier_10,lyr_Pharmacie_11,lyr_March_12,lyr_Hotel_13];
lyr_ZoneEtude_1.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', });
lyr_Lac_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'natural': 'natural', 'water': 'water', });
lyr_Routeresidentielle_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'surface': 'surface', 'service': 'service', 'truck': 'truck', });
lyr_RouteTertiaire_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'oneway': 'oneway', });
lyr_RouteSecondaire_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ref': 'ref', 'surface': 'surface', 'bridge': 'bridge', 'layer': 'layer', });
lyr_RoutePrimaire_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'ref': 'ref', 'surface': 'surface', });
lyr_RouteNationale_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ref': 'ref', 'surface': 'surface', 'alt_name': 'alt_name', 'junction': 'junction', 'name': 'name', 'oneway': 'oneway', });
lyr_centreville_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'capital': 'capital', 'is_in_coun': 'is_in_coun', 'is_in_co_1': 'is_in_co_1', 'is_in_depa': 'is_in_depa', 'is_in_regi': 'is_in_regi', 'name': 'name', 'name_en': 'name_en', 'name_ko': 'name_ko', 'name_ru': 'name_ru', 'place': 'place', 'population': 'population', 'rank': 'rank', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_Ecole_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'amenity': 'amenity', 'name': 'name', 'addr_city': 'addr_city', 'check_date': 'check_date', 'operator_t': 'operator_t', 'level': 'level', 'wheelchair': 'wheelchair', 'phone': 'phone', 'religion': 'religion', 'school_FR': 'school_FR', 'survey_dat': 'survey_dat', 'addr_postc': 'addr_postc', 'descriptio': 'descriptio', });
lyr_Quartier_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'place': 'place', });
lyr_Pharmacie_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'check_date': 'check_date', 'healthcare': 'healthcare', 'phone': 'phone', 'level': 'level', 'survey:date': 'survey:date', 'wheelchair': 'wheelchair', });
lyr_March_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'check_date': 'check_date', 'name': 'name', 'survey_dat': 'survey_dat', });
lyr_Hotel_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'internet_a': 'internet_a', 'name': 'name', 'name_fr': 'name_fr', 'tourism': 'tourism', 'check_date': 'check_date', 'air_condit': 'air_condit', 'bar': 'bar', 'building_l': 'building_l', 'internet_1': 'internet_1', 'phone': 'phone', 'reservatio': 'reservatio', 'stars': 'stars', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'payment_ca': 'payment_ca', 'payment_cr': 'payment_cr', 'payment_de': 'payment_de', 'survey_dat': 'survey_dat', });
lyr_ZoneEtude_1.set('fieldImages', {'id_0': 'TextEdit', 'id': 'TextEdit', });
lyr_Lac_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', });
lyr_Routeresidentielle_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'service': 'TextEdit', 'truck': 'TextEdit', });
lyr_RouteTertiaire_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', });
lyr_RouteSecondaire_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'surface': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', });
lyr_RoutePrimaire_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'surface': 'TextEdit', });
lyr_RouteNationale_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'surface': 'TextEdit', 'alt_name': 'TextEdit', 'junction': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', });
lyr_centreville_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_leve': 'TextEdit', 'capital': 'TextEdit', 'is_in_coun': 'TextEdit', 'is_in_co_1': 'TextEdit', 'is_in_depa': 'TextEdit', 'is_in_regi': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'name_ko': 'TextEdit', 'name_ru': 'TextEdit', 'place': 'TextEdit', 'population': 'TextEdit', 'rank': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Ecole_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'addr_city': 'TextEdit', 'check_date': 'TextEdit', 'operator_t': 'TextEdit', 'level': 'TextEdit', 'wheelchair': 'TextEdit', 'phone': 'TextEdit', 'religion': 'TextEdit', 'school_FR': 'TextEdit', 'survey_dat': 'TextEdit', 'addr_postc': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Quartier_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'place': 'TextEdit', });
lyr_Pharmacie_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'check_date': 'TextEdit', 'healthcare': 'TextEdit', 'phone': 'TextEdit', 'level': 'TextEdit', 'survey:date': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_March_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'check_date': '', 'name': '', 'survey_dat': '', });
lyr_Hotel_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'internet_a': 'TextEdit', 'name': 'TextEdit', 'name_fr': 'TextEdit', 'tourism': 'TextEdit', 'check_date': 'TextEdit', 'air_condit': 'TextEdit', 'bar': 'TextEdit', 'building_l': 'TextEdit', 'internet_1': 'TextEdit', 'phone': 'TextEdit', 'reservatio': 'TextEdit', 'stars': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'payment_ca': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_de': 'TextEdit', 'survey_dat': 'TextEdit', });
lyr_ZoneEtude_1.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', });
lyr_Lac_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'natural': 'no label', 'water': 'no label', });
lyr_Routeresidentielle_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'surface': 'no label', 'service': 'no label', 'truck': 'no label', });
lyr_RouteTertiaire_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'oneway': 'no label', });
lyr_RouteSecondaire_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ref': 'no label', 'surface': 'no label', 'bridge': 'no label', 'layer': 'no label', });
lyr_RoutePrimaire_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'ref': 'no label', 'surface': 'no label', });
lyr_RouteNationale_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ref': 'no label', 'surface': 'no label', 'alt_name': 'no label', 'junction': 'no label', 'name': 'no label', 'oneway': 'no label', });
lyr_centreville_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_leve': 'no label', 'capital': 'no label', 'is_in_coun': 'no label', 'is_in_co_1': 'no label', 'is_in_depa': 'no label', 'is_in_regi': 'no label', 'name': 'no label', 'name_en': 'no label', 'name_ko': 'no label', 'name_ru': 'no label', 'place': 'no label', 'population': 'no label', 'rank': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_Ecole_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'amenity': 'no label', 'name': 'header label - always visible', 'addr_city': 'no label', 'check_date': 'no label', 'operator_t': 'no label', 'level': 'no label', 'wheelchair': 'no label', 'phone': 'no label', 'religion': 'no label', 'school_FR': 'no label', 'survey_dat': 'no label', 'addr_postc': 'no label', 'descriptio': 'no label', });
lyr_Quartier_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'place': 'no label', });
lyr_Pharmacie_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', 'check_date': 'no label', 'healthcare': 'no label', 'phone': 'no label', 'level': 'no label', 'survey:date': 'no label', 'wheelchair': 'no label', });
lyr_March_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'check_date': 'no label', 'name': 'header label - always visible', 'survey_dat': 'no label', });
lyr_Hotel_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'internet_a': 'no label', 'name': 'header label - always visible', 'name_fr': 'no label', 'tourism': 'no label', 'check_date': 'no label', 'air_condit': 'no label', 'bar': 'no label', 'building_l': 'no label', 'internet_1': 'no label', 'phone': 'no label', 'reservatio': 'no label', 'stars': 'no label', 'addr_city': 'no label', 'wheelchair': 'no label', 'payment_ca': 'no label', 'payment_cr': 'no label', 'payment_de': 'no label', 'survey_dat': 'no label', });
lyr_Hotel_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});