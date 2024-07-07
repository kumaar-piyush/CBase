let availableKeywords = [
    'colon cancer pathway','EGFR/MAPK signaling pathway','Notch signaling pathway','EGFR/MAPK signaling pathway','PI3K/AKT/mTOR signaling pathway','TGF beta signaling pathway','Wnt signaling pathway',
    'NF-kappa B signaling pathway','CA7','Carbonic anhydrase 7','GUCA2B','Guanylate cyclase activator 2B','PYY','Peptide YY','CA1','Carbonic anhydrase 1','GUCA2A','Guanylin','GCG','Pro-glucagon','CA2','Carbonic anhydrase 2','CWH43','PGAP2-interacting protein','PKIB','cAMP-dependent protein kinase inhibitor beta','SLC26A2','Sulfate transporter','MS4A12','Membrane-spanning 4-domains subfamily A member 12','SLC4A4','Electrogenic sodium bicarbonate cotransporter 1','CA4','Carbonic anhydrase 4','CD177','CD177 antigen','CHGA','Chromogranin-A','SULT1A2','Sulfotransferase 1A2','LYPD8','Ly6/PLAUR domain-containing protein 8','CHP2','Calcineurin B homologous protein 2','ZG16','Zymogen granule membrane protein 16','BEST2','Bestrophin-2',
];

const resultsBox = document.querySelector(".result-box");
const search = document.getElementById("search");

search.onkeyup = function(){
    let result = [];
    let input = search.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick='selectInput(this)'>" + list +"</li>";
    });
    
    resultsBox.innerHTML = "<ul>" + content.join(' ') + "</ul>";
}

function selectInput(list){
    search.value = list.innerHTML;
    resultsBox.innerHTML = '';

    // Switch statement for navigation
    switch (list.innerHTML) {
        case 'colon cancer pathway':
            window.location.href = "pathway_list.html"; // Replace with actual URL
            break;
        case 'EGFR/MAPK signaling pathway':
            window.location.href = "EGFR_path.html"; 
            break;
        case 'Notch signaling pathway':
            window.location.href = "Notch_path.html"; 
            break;
        case 'PI3K/AKT/mTOR signaling pathway':
            window.location.href = "pi3k_path.html"; 
            break;
        case 'TGF beta signaling pathway':
            window.location.href = "TGF_path.html"; 
            break;
        case 'Wnt signaling pathway':
            window.location.href = "wnt_path.html"; 
            break;
        case 'NF-kappa B signaling pathway':
            window.location.href = "NFKB_path.html"; 
            break;
        case 'CA7':
            window.location.href = "CA7.html"; 
            break;
        case 'Carbonic anhydrase 7':
            window.location.href = "CA7.html"; 
            break;
            case 'GUCA2B':
            window.location.href = "GUCA2B.html"; 
            break;
            case 'Guanylate cyclase activator 2B':
            window.location.href = "GUCA2B.html"; 
            break;
            case 'PYY':
            window.location.href = "PYY.html"; 
            break;
            case 'Peptide YY':
            window.location.href = "PYY.html"; 
            break;
            case 'CA1':
            window.location.href = "CA1.html"; 
            break;
            case 'Carbonic anhydrase 1':
            window.location.href = "CA1.html"; 
            break;
            case 'GUCA2A':
            window.location.href = "GUCA2A.html"; 
            break;
            case 'Guanylin':
            window.location.href = "GUCA2A.html"; 
            break;
            case 'GCG':
            window.location.href = "GCG.html"; 
            break;
            case 'Pro-glucagon':
            window.location.href = "GCG.html"; 
            break;
            case 'CA2':
            window.location.href = "CA2.html"; 
            break;
            case 'Carbonic anhydrase 2':
            window.location.href = "CA2.html"; 
            break;
            case 'CWH43':
            window.location.href = "CWH43.html"; 
            break;
            case 'PGAP2-interacting protein':
            window.location.href = "CWH43.html"; 
            break;
            case 'PKIB':
            window.location.href = "PKIB.html"; 
            break;
            case 'cAMP-dependent protein kinase inhibitor beta':
            window.location.href = "PKIB.html"; 
            break;
            case 'SLC26A2':
            window.location.href = "SLC26A2.html"; 
            break;
            case 'Sulfate transporter':
            window.location.href = "SLC26A2.html"; 
            break;
            case 'MS4A12':
            window.location.href = "MS4A12.html"; 
            break;
            case 'Membrane-spanning 4-domains subfamily A member 12':
            window.location.href = "MS4A12.html"; 
            break;
            case 'SLC4A4':
            window.location.href = "SLC4A4.html"; 
            break;
            case 'Electrogenic sodium bicarbonate cotransporter 1':
            window.location.href = "SLC4A4.html"; 
            break;
            case 'CA4':
            window.location.href = "CA4.html"; 
            break;
            case 'Carbonic anhydrase 4':
            window.location.href = "CA4.html"; 
            break;
            case 'CD177':
            window.location.href = "CD177.html"; 
            break;
            case 'CD177 antigen':
            window.location.href = "CD177.html"; 
            break;
            case 'CHGA':
            window.location.href = "CHGA.html"; 
            break;
            case 'Chromogranin-A':
            window.location.href = "CHGA.html"; 
            break;
            case 'CA7':
            window.location.href = "CA7.html"; 
            break;
            case 'SULT1A2':
            window.location.href = "SULT1A2.html"; 
            break;
            case 'Sulfotransferase 1A2':
            window.location.href = "SULT1A2.html"; 
            break;
            case 'LYPD8':
            window.location.href = "LYPD8.html"; 
            break;
            case 'Ly6/PLAUR domain-containing protein 8':
            window.location.href = "LYPD8.html"; 
            break;
            case 'CHP2':
            window.location.href = "CHP2.html"; 
            break;
            case 'Calcineurin B homologous protein 2':
            window.location.href = "CHP2.html"; 
            break;
            case 'ZG16':
            window.location.href = "ZG16.html"; 
            break;
            case 'Zymogen granule membrane protein 16':
            window.location.href = "ZG16.html"; 
            break;
            case 'BEST2':
            window.location.href = "BEST2.html"; 
            break;
            case 'Bestrophin-2':
            window.location.href = "BEST2.html"; 
            break;
            
        default:
            break;
    }
}
