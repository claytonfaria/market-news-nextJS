const tickers = [
  {
    symbol: 'MMM',
    name: '3M Company',
  },
  {
    symbol: 'ABT',
    name: 'Abbott Laboratories',
  },
  {
    symbol: 'ABBV',
    name: 'AbbVie Inc.',
  },
  {
    symbol: 'ABMD',
    name: 'ABIOMED Inc',
  },
  {
    symbol: 'ACN',
    name: 'Accenture plc',
  },
  {
    symbol: 'ATVI',
    name: 'Activision Blizzard',
  },
  {
    symbol: 'ADBE',
    name: 'Adobe Inc.',
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices Inc',
  },
  {
    symbol: 'AAP',
    name: 'Advance Auto Parts',
  },
  {
    symbol: 'AES',
    name: 'AES Corp',
  },
  {
    symbol: 'AFL',
    name: 'AFLAC Inc',
  },
  {
    symbol: 'A',
    name: 'Agilent Technologies Inc',
  },
  {
    symbol: 'APD',
    name: 'Air Products & Chemicals Inc',
  },
  {
    symbol: 'AKAM',
    name: 'Akamai Technologies Inc',
  },
  {
    symbol: 'ALK',
    name: 'Alaska Air Group Inc',
  },
  {
    symbol: 'ALB',
    name: 'Albemarle Corp',
  },
  {
    symbol: 'ARE',
    name: 'Alexandria Real Estate Equities',
  },
  {
    symbol: 'ALXN',
    name: 'Alexion Pharmaceuticals',
  },
  {
    symbol: 'ALGN',
    name: 'Align Technology',
  },
  {
    symbol: 'ALLE',
    name: 'Allegion',
  },
  {
    symbol: 'LNT',
    name: 'Alliant Energy Corp',
  },
  {
    symbol: 'ALL',
    name: 'Allstate Corp',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc. (Class A)',
  },
  {
    symbol: 'GOOG',
    name: 'Alphabet Inc. (Class C)',
  },
  {
    symbol: 'MO',
    name: 'Altria Group Inc',
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
  },
  {
    symbol: 'AMCR',
    name: 'Amcor plc',
  },
  {
    symbol: 'AEE',
    name: 'Ameren Corp',
  },
  {
    symbol: 'AAL',
    name: 'American Airlines Group',
  },
  {
    symbol: 'AEP',
    name: 'American Electric Power',
  },
  {
    symbol: 'AXP',
    name: 'American Express Co',
  },
  {
    symbol: 'AIG',
    name: 'American International Group',
  },
  {
    symbol: 'AMT',
    name: 'American Tower Corp.',
  },
  {
    symbol: 'AWK',
    name: 'American Water Works Company Inc',
  },
  {
    symbol: 'AMP',
    name: 'Ameriprise Financial',
  },
  {
    symbol: 'ABC',
    name: 'AmerisourceBergen Corp',
  },
  {
    symbol: 'AME',
    name: 'AMETEK Inc.',
  },
  {
    symbol: 'AMGN',
    name: 'Amgen Inc.',
  },
  {
    symbol: 'APH',
    name: 'Amphenol Corp',
  },
  {
    symbol: 'ADI',
    name: 'Analog Devices, Inc.',
  },
  {
    symbol: 'ANSS',
    name: 'ANSYS',
  },
  {
    symbol: 'ANTM',
    name: 'Anthem',
  },
  {
    symbol: 'AON',
    name: 'Aon plc',
  },
  {
    symbol: 'AOS',
    name: 'A.O. Smith Corp',
  },
  {
    symbol: 'APA',
    name: 'Apache Corporation',
  },
  {
    symbol: 'AIV',
    name: 'Apartment Investment & Management',
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
  },
  {
    symbol: 'AMAT',
    name: 'Applied Materials Inc.',
  },
  {
    symbol: 'APTV',
    name: 'Aptiv PLC',
  },
  {
    symbol: 'ADM',
    name: 'Archer-Daniels-Midland Co',
  },
  {
    symbol: 'ANET',
    name: 'Arista Networks',
  },
  {
    symbol: 'AJG',
    name: 'Arthur J. Gallagher & Co.',
  },
  {
    symbol: 'AIZ',
    name: 'Assurant',
  },
  {
    symbol: 'T',
    name: 'AT&T Inc.',
  },
  {
    symbol: 'ATO',
    name: 'Atmos Energy',
  },
  {
    symbol: 'ADSK',
    name: 'Autodesk Inc.',
  },
  {
    symbol: 'ADP',
    name: 'Automatic Data Processing',
  },
  {
    symbol: 'AZO',
    name: 'AutoZone Inc',
  },
  {
    symbol: 'AVB',
    name: 'AvalonBay Communities',
  },
  {
    symbol: 'AVY',
    name: 'Avery Dennison Corp',
  },
  {
    symbol: 'BKR',
    name: 'Baker Hughes Co',
  },
  {
    symbol: 'BLL',
    name: 'Ball Corp',
  },
  {
    symbol: 'BAC',
    name: 'Bank of America Corp',
  },
  {
    symbol: 'BK',
    name: 'The Bank of New York Mellon',
  },
  {
    symbol: 'BAX',
    name: 'Baxter International Inc.',
  },
  {
    symbol: 'BDX',
    name: 'Becton Dickinson',
  },
  {
    symbol: 'BRK.B',
    name: 'Berkshire Hathaway',
  },
  {
    symbol: 'BBY',
    name: 'Best Buy Co. Inc.',
  },
  {
    symbol: 'BIO',
    name: 'Bio-Rad Laboratories',
  },
  {
    symbol: 'BIIB',
    name: 'Biogen Inc.',
  },
  {
    symbol: 'BLK',
    name: 'BlackRock',
  },
  {
    symbol: 'BA',
    name: 'Boeing Company',
  },
  {
    symbol: 'BKNG',
    name: 'Booking Holdings Inc',
  },
  {
    symbol: 'BWA',
    name: 'BorgWarner',
  },
  {
    symbol: 'BXP',
    name: 'Boston Properties',
  },
  {
    symbol: 'BSX',
    name: 'Boston Scientific',
  },
  {
    symbol: 'BMY',
    name: 'Bristol-Myers Squibb',
  },
  {
    symbol: 'AVGO',
    name: 'Broadcom Inc.',
  },
  {
    symbol: 'BR',
    name: 'Broadridge Financial Solutions',
  },
  {
    symbol: 'BF.B',
    name: 'Brown-Forman Corp.',
  },
  {
    symbol: 'CHRW',
    name: 'C. H. Robinson Worldwide',
  },
  {
    symbol: 'COG',
    name: 'Cabot Oil & Gas',
  },
  {
    symbol: 'CDNS',
    name: 'Cadence Design Systems',
  },
  {
    symbol: 'CPB',
    name: 'Campbell Soup',
  },
  {
    symbol: 'COF',
    name: 'Capital One Financial',
  },
  {
    symbol: 'CAH',
    name: 'Cardinal Health Inc.',
  },
  {
    symbol: 'KMX',
    name: 'Carmax Inc',
  },
  {
    symbol: 'CCL',
    name: 'Carnival Corp.',
  },
  {
    symbol: 'CARR',
    name: 'Carrier Global',
  },
  {
    symbol: 'CAT',
    name: 'Caterpillar Inc.',
  },
  {
    symbol: 'CBOE',
    name: 'Cboe Global Markets',
  },
  {
    symbol: 'CBRE',
    name: 'CBRE Group',
  },
  {
    symbol: 'CDW',
    name: 'CDW',
  },
  {
    symbol: 'CE',
    name: 'Celanese',
  },
  {
    symbol: 'CNC',
    name: 'Centene Corporation',
  },
  {
    symbol: 'CNP',
    name: 'CenterPoint Energy',
  },
  {
    symbol: 'CERN',
    name: 'Cerner',
  },
  {
    symbol: 'CF',
    name: 'CF Industries Holdings Inc',
  },
  {
    symbol: 'SCHW',
    name: 'Charles Schwab Corporation',
  },
  {
    symbol: 'CHTR',
    name: 'Charter Communications',
  },
  {
    symbol: 'CVX',
    name: 'Chevron Corp.',
  },
  {
    symbol: 'CMG',
    name: 'Chipotle Mexican Grill',
  },
  {
    symbol: 'CB',
    name: 'Chubb Limited',
  },
  {
    symbol: 'CHD',
    name: 'Church & Dwight',
  },
  {
    symbol: 'CI',
    name: 'CIGNA Corp.',
  },
  {
    symbol: 'CINF',
    name: 'Cincinnati Financial',
  },
  {
    symbol: 'CTAS',
    name: 'Cintas Corporation',
  },
  {
    symbol: 'CSCO',
    name: 'Cisco Systems',
  },
  {
    symbol: 'C',
    name: 'Citigroup Inc.',
  },
  {
    symbol: 'CFG',
    name: 'Citizens Financial Group',
  },
  {
    symbol: 'CTXS',
    name: 'Citrix Systems',
  },
  {
    symbol: 'CLX',
    name: 'The Clorox Company',
  },
  {
    symbol: 'CME',
    name: 'CME Group Inc.',
  },
  {
    symbol: 'CMS',
    name: 'CMS Energy',
  },
  {
    symbol: 'KO',
    name: 'Coca-Cola Company',
  },
  {
    symbol: 'CTSH',
    name: 'Cognizant Technology Solutions',
  },
  {
    symbol: 'CL',
    name: 'Colgate-Palmolive',
  },
  {
    symbol: 'CMCSA',
    name: 'Comcast Corp.',
  },
  {
    symbol: 'CMA',
    name: 'Comerica Inc.',
  },
  {
    symbol: 'CAG',
    name: 'Conagra Brands',
  },
  {
    symbol: 'CXO',
    name: 'Concho Resources',
  },
  {
    symbol: 'COP',
    name: 'ConocoPhillips',
  },
  {
    symbol: 'ED',
    name: 'Consolidated Edison',
  },
  {
    symbol: 'STZ',
    name: 'Constellation Brands',
  },
  {
    symbol: 'COO',
    name: 'The Cooper Companies',
  },
  {
    symbol: 'CPRT',
    name: 'Copart Inc',
  },
  {
    symbol: 'GLW',
    name: 'Corning Inc.',
  },
  {
    symbol: 'CTVA',
    name: 'Corteva',
  },
  {
    symbol: 'COST',
    name: 'Costco Wholesale Corp.',
  },
  {
    symbol: 'COTY',
    name: 'Coty, Inc',
  },
  {
    symbol: 'CCI',
    name: 'Crown Castle International Corp.',
  },
  {
    symbol: 'CSX',
    name: 'CSX Corp.',
  },
  {
    symbol: 'CMI',
    name: 'Cummins Inc.',
  },
  {
    symbol: 'CVS',
    name: 'CVS Health',
  },
  {
    symbol: 'DHI',
    name: 'D. R. Horton',
  },
  {
    symbol: 'DHR',
    name: 'Danaher Corp.',
  },
  {
    symbol: 'DRI',
    name: 'Darden Restaurants',
  },
  {
    symbol: 'DVA',
    name: 'DaVita Inc.',
  },
  {
    symbol: 'DE',
    name: 'Deere & Co.',
  },
  {
    symbol: 'DAL',
    name: 'Delta Air Lines Inc.',
  },
  {
    symbol: 'XRAY',
    name: 'Dentsply Sirona',
  },
  {
    symbol: 'DVN',
    name: 'Devon Energy',
  },
  {
    symbol: 'DXCM',
    name: 'DexCom',
  },
  {
    symbol: 'FANG',
    name: 'Diamondback Energy',
  },
  {
    symbol: 'DLR',
    name: 'Digital Realty Trust Inc',
  },
  {
    symbol: 'DFS',
    name: 'Discover Financial Services',
  },
  {
    symbol: 'DISCA',
    name: 'Discovery, Inc. (Class A)',
  },
  {
    symbol: 'DISCK',
    name: 'Discovery, Inc. (Class C)',
  },
  {
    symbol: 'DISH',
    name: 'Dish Network',
  },
  {
    symbol: 'DG',
    name: 'Dollar General',
  },
  {
    symbol: 'DLTR',
    name: 'Dollar Tree',
  },
  {
    symbol: 'D',
    name: 'Dominion Energy',
  },
  {
    symbol: 'DPZ',
    name: "Domino's Pizza",
  },
  {
    symbol: 'DOV',
    name: 'Dover Corporation',
  },
  {
    symbol: 'DOW',
    name: 'Dow Inc.',
  },
  {
    symbol: 'DTE',
    name: 'DTE Energy Co.',
  },
  {
    symbol: 'DUK',
    name: 'Duke Energy',
  },
  {
    symbol: 'DRE',
    name: 'Duke Realty Corp',
  },
  {
    symbol: 'DD',
    name: 'DuPont de Nemours Inc',
  },
  {
    symbol: 'DXC',
    name: 'DXC Technology',
  },
  {
    symbol: 'ETFC',
    name: 'E*Trade',
  },
  {
    symbol: 'EMN',
    name: 'Eastman Chemical',
  },
  {
    symbol: 'ETN',
    name: 'Eaton Corporation',
  },
  {
    symbol: 'EBAY',
    name: 'eBay Inc.',
  },
  {
    symbol: 'ECL',
    name: 'Ecolab Inc.',
  },
  {
    symbol: 'EIX',
    name: "Edison Int'l",
  },
  {
    symbol: 'EW',
    name: 'Edwards Lifesciences',
  },
  {
    symbol: 'EA',
    name: 'Electronic Arts',
  },
  {
    symbol: 'EMR',
    name: 'Emerson Electric Company',
  },
  {
    symbol: 'ETR',
    name: 'Entergy Corp.',
  },
  {
    symbol: 'EOG',
    name: 'EOG Resources',
  },
  {
    symbol: 'EFX',
    name: 'Equifax Inc.',
  },
  {
    symbol: 'EQIX',
    name: 'Equinix',
  },
  {
    symbol: 'EQR',
    name: 'Equity Residential',
  },
  {
    symbol: 'ESS',
    name: 'Essex Property Trust, Inc.',
  },
  {
    symbol: 'EL',
    name: 'Estée Lauder Companies',
  },
  {
    symbol: 'EVRG',
    name: 'Evergy',
  },
  {
    symbol: 'ES',
    name: 'Eversource Energy',
  },
  {
    symbol: 'RE',
    name: 'Everest Re Group Ltd.',
  },
  {
    symbol: 'EXC',
    name: 'Exelon Corp.',
  },
  {
    symbol: 'EXPE',
    name: 'Expedia Group',
  },
  {
    symbol: 'EXPD',
    name: 'Expeditors',
  },
  {
    symbol: 'EXR',
    name: 'Extra Space Storage',
  },
  {
    symbol: 'XOM',
    name: 'Exxon Mobil Corp.',
  },
  {
    symbol: 'FFIV',
    name: 'F5 Networks',
  },
  {
    symbol: 'FB',
    name: 'Facebook, Inc.',
  },
  {
    symbol: 'FAST',
    name: 'Fastenal Co',
  },
  {
    symbol: 'FRT',
    name: 'Federal Realty Investment Trust',
  },
  {
    symbol: 'FDX',
    name: 'FedEx Corporation',
  },
  {
    symbol: 'FIS',
    name: 'Fidelity National Information Services',
  },
  {
    symbol: 'FITB',
    name: 'Fifth Third Bancorp',
  },
  {
    symbol: 'FE',
    name: 'FirstEnergy Corp',
  },
  {
    symbol: 'FRC',
    name: 'First Republic Bank',
  },
  {
    symbol: 'FISV',
    name: 'Fiserv Inc',
  },
  {
    symbol: 'FLT',
    name: 'FleetCor Technologies Inc',
  },
  {
    symbol: 'FLIR',
    name: 'FLIR Systems',
  },
  {
    symbol: 'FLS',
    name: 'Flowserve Corporation',
  },
  {
    symbol: 'FMC',
    name: 'FMC Corporation',
  },
  {
    symbol: 'F',
    name: 'Ford Motor Company',
  },
  {
    symbol: 'FTNT',
    name: 'Fortinet',
  },
  {
    symbol: 'FTV',
    name: 'Fortive Corp',
  },
  {
    symbol: 'FBHS',
    name: 'Fortune Brands Home & Security',
  },
  {
    symbol: 'FOXA',
    name: 'Fox Corporation (Class A)',
  },
  {
    symbol: 'FOX',
    name: 'Fox Corporation (Class B)',
  },
  {
    symbol: 'BEN',
    name: 'Franklin Resources',
  },
  {
    symbol: 'FCX',
    name: 'Freeport-McMoRan Inc.',
  },
  {
    symbol: 'GPS',
    name: 'Gap Inc.',
  },
  {
    symbol: 'GRMN',
    name: 'Garmin Ltd.',
  },
  {
    symbol: 'IT',
    name: 'Gartner Inc',
  },
  {
    symbol: 'GD',
    name: 'General Dynamics',
  },
  {
    symbol: 'GE',
    name: 'General Electric',
  },
  {
    symbol: 'GIS',
    name: 'General Mills',
  },
  {
    symbol: 'GM',
    name: 'General Motors',
  },
  {
    symbol: 'GPC',
    name: 'Genuine Parts',
  },
  {
    symbol: 'GILD',
    name: 'Gilead Sciences',
  },
  {
    symbol: 'GL',
    name: 'Globe Life Inc.',
  },
  {
    symbol: 'GPN',
    name: 'Global Payments Inc.',
  },
  {
    symbol: 'GS',
    name: 'Goldman Sachs Group',
  },
  {
    symbol: 'GWW',
    name: 'Grainger (W.W.) Inc.',
  },
  {
    symbol: 'HRB',
    name: 'H&R Block',
  },
  {
    symbol: 'HAL',
    name: 'Halliburton Co.',
  },
  {
    symbol: 'HBI',
    name: 'Hanesbrands Inc',
  },
  {
    symbol: 'HIG',
    name: 'Hartford Financial Svc.Gp.',
  },
  {
    symbol: 'HAS',
    name: 'Hasbro Inc.',
  },
  {
    symbol: 'HCA',
    name: 'HCA Healthcare',
  },
  {
    symbol: 'PEAK',
    name: 'Healthpeak Properties',
  },
  {
    symbol: 'HSIC',
    name: 'Henry Schein',
  },
  {
    symbol: 'HSY',
    name: 'The Hershey Company',
  },
  {
    symbol: 'HES',
    name: 'Hess Corporation',
  },
  {
    symbol: 'HPE',
    name: 'Hewlett Packard Enterprise',
  },
  {
    symbol: 'HLT',
    name: 'Hilton Worldwide Holdings Inc',
  },
  {
    symbol: 'HFC',
    name: 'HollyFrontier Corp',
  },
  {
    symbol: 'HOLX',
    name: 'Hologic',
  },
  {
    symbol: 'HD',
    name: 'Home Depot',
  },
  {
    symbol: 'HON',
    name: "Honeywell Int'l Inc.",
  },
  {
    symbol: 'HRL',
    name: 'Hormel Foods Corp.',
  },
  {
    symbol: 'HST',
    name: 'Host Hotels & Resorts',
  },
  {
    symbol: 'HWM',
    name: 'Howmet Aerospace',
  },
  {
    symbol: 'HPQ',
    name: 'HP Inc.',
  },
  {
    symbol: 'HUM',
    name: 'Humana Inc.',
  },
  {
    symbol: 'HBAN',
    name: 'Huntington Bancshares',
  },
  {
    symbol: 'HII',
    name: 'Huntington Ingalls Industries',
  },
  {
    symbol: 'IEX',
    name: 'IDEX Corporation',
  },
  {
    symbol: 'IDXX',
    name: 'IDEXX Laboratories',
  },
  {
    symbol: 'INFO',
    name: 'IHS Markit Ltd.',
  },
  {
    symbol: 'ITW',
    name: 'Illinois Tool Works',
  },
  {
    symbol: 'ILMN',
    name: 'Illumina Inc',
  },
  {
    symbol: 'INCY',
    name: 'Incyte',
  },
  {
    symbol: 'IR',
    name: 'Ingersoll Rand',
  },
  {
    symbol: 'INTC',
    name: 'Intel Corp.',
  },
  {
    symbol: 'ICE',
    name: 'Intercontinental Exchange',
  },
  {
    symbol: 'IBM',
    name: 'International Business Machines',
  },
  {
    symbol: 'IP',
    name: 'International Paper',
  },
  {
    symbol: 'IPG',
    name: 'Interpublic Group',
  },
  {
    symbol: 'IFF',
    name: 'International Flavors & Fragrances',
  },
  {
    symbol: 'INTU',
    name: 'Intuit Inc.',
  },
  {
    symbol: 'ISRG',
    name: 'Intuitive Surgical Inc.',
  },
  {
    symbol: 'IVZ',
    name: 'Invesco Ltd.',
  },
  {
    symbol: 'IPGP',
    name: 'IPG Photonics Corp.',
  },
  {
    symbol: 'IQV',
    name: 'IQVIA Holdings Inc.',
  },
  {
    symbol: 'IRM',
    name: 'Iron Mountain Incorporated',
  },
  {
    symbol: 'JKHY',
    name: 'Jack Henry & Associates',
  },
  {
    symbol: 'J',
    name: 'Jacobs Engineering Group',
  },
  {
    symbol: 'JBHT',
    name: 'J. B. Hunt Transport Services',
  },
  {
    symbol: 'SJM',
    name: 'JM Smucker',
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
  },
  {
    symbol: 'JCI',
    name: 'Johnson Controls International',
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
  },
  {
    symbol: 'JNPR',
    name: 'Juniper Networks',
  },
  {
    symbol: 'KSU',
    name: 'Kansas City Southern',
  },
  {
    symbol: 'K',
    name: 'Kellogg Co.',
  },
  {
    symbol: 'KEY',
    name: 'KeyCorp',
  },
  {
    symbol: 'KEYS',
    name: 'Keysight Technologies',
  },
  {
    symbol: 'KMB',
    name: 'Kimberly-Clark',
  },
  {
    symbol: 'KIM',
    name: 'Kimco Realty',
  },
  {
    symbol: 'KMI',
    name: 'Kinder Morgan',
  },
  {
    symbol: 'KLAC',
    name: 'KLA Corporation',
  },
  {
    symbol: 'KSS',
    name: "Kohl's Corp.",
  },
  {
    symbol: 'KHC',
    name: 'Kraft Heinz Co',
  },
  {
    symbol: 'KR',
    name: 'Kroger Co.',
  },
  {
    symbol: 'LB',
    name: 'L Brands Inc.',
  },
  {
    symbol: 'LHX',
    name: 'L3Harris Technologies',
  },
  {
    symbol: 'LH',
    name: 'Laboratory Corp. of America Holding',
  },
  {
    symbol: 'LRCX',
    name: 'Lam Research',
  },
  {
    symbol: 'LW',
    name: 'Lamb Weston Holdings Inc',
  },
  {
    symbol: 'LVS',
    name: 'Las Vegas Sands',
  },
  {
    symbol: 'LEG',
    name: 'Leggett & Platt',
  },
  {
    symbol: 'LDOS',
    name: 'Leidos Holdings',
  },
  {
    symbol: 'LEN',
    name: 'Lennar Corp.',
  },
  {
    symbol: 'LLY',
    name: 'Lilly (Eli) & Co.',
  },
  {
    symbol: 'LNC',
    name: 'Lincoln National',
  },
  {
    symbol: 'LIN',
    name: 'Linde plc',
  },
  {
    symbol: 'LYV',
    name: 'Live Nation Entertainment',
  },
  {
    symbol: 'LKQ',
    name: 'LKQ Corporation',
  },
  {
    symbol: 'LMT',
    name: 'Lockheed Martin Corp.',
  },
  {
    symbol: 'L',
    name: 'Loews Corp.',
  },
  {
    symbol: 'LOW',
    name: "Lowe's Cos.",
  },
  {
    symbol: 'LUMN',
    name: 'Lumen Technologies',
  },
  {
    symbol: 'LYB',
    name: 'LyondellBasell',
  },
  {
    symbol: 'MTB',
    name: 'M&T Bank Corp.',
  },
  {
    symbol: 'MRO',
    name: 'Marathon Oil Corp.',
  },
  {
    symbol: 'MPC',
    name: 'Marathon Petroleum',
  },
  {
    symbol: 'MKTX',
    name: 'MarketAxess',
  },
  {
    symbol: 'MAR',
    name: "Marriott Int'l.",
  },
  {
    symbol: 'MMC',
    name: 'Marsh & McLennan',
  },
  {
    symbol: 'MLM',
    name: 'Martin Marietta Materials',
  },
  {
    symbol: 'MAS',
    name: 'Masco Corp.',
  },
  {
    symbol: 'MA',
    name: 'Mastercard Inc.',
  },
  {
    symbol: 'MKC',
    name: 'McCormick & Co.',
  },
  {
    symbol: 'MXIM',
    name: 'Maxim Integrated Products Inc',
  },
  {
    symbol: 'MCD',
    name: "McDonald's Corp.",
  },
  {
    symbol: 'MCK',
    name: 'McKesson Corp.',
  },
  {
    symbol: 'MDT',
    name: 'Medtronic plc',
  },
  {
    symbol: 'MRK',
    name: 'Merck & Co.',
  },
  {
    symbol: 'MET',
    name: 'MetLife Inc.',
  },
  {
    symbol: 'MTD',
    name: 'Mettler Toledo',
  },
  {
    symbol: 'MGM',
    name: 'MGM Resorts International',
  },
  {
    symbol: 'MCHP',
    name: 'Microchip Technology',
  },
  {
    symbol: 'MU',
    name: 'Micron Technology',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
  },
  {
    symbol: 'MAA',
    name: 'Mid-America Apartments',
  },
  {
    symbol: 'MHK',
    name: 'Mohawk Industries',
  },
  {
    symbol: 'TAP',
    name: 'Molson Coors Beverage Company',
  },
  {
    symbol: 'MDLZ',
    name: 'Mondelez International',
  },
  {
    symbol: 'MNST',
    name: 'Monster Beverage',
  },
  {
    symbol: 'MCO',
    name: "Moody's Corp",
  },
  {
    symbol: 'MS',
    name: 'Morgan Stanley',
  },
  {
    symbol: 'MOS',
    name: 'The Mosaic Company',
  },
  {
    symbol: 'MSI',
    name: 'Motorola Solutions Inc.',
  },
  {
    symbol: 'MSCI',
    name: 'MSCI Inc',
  },
  {
    symbol: 'MYL',
    name: 'Mylan N.V.',
  },
  {
    symbol: 'NDAQ',
    name: 'Nasdaq, Inc.',
  },
  {
    symbol: 'NOV',
    name: 'National Oilwell Varco Inc.',
  },
  {
    symbol: 'NTAP',
    name: 'NetApp',
  },
  {
    symbol: 'NFLX',
    name: 'Netflix Inc.',
  },
  {
    symbol: 'NWL',
    name: 'Newell Brands',
  },
  {
    symbol: 'NEM',
    name: 'Newmont Corporation',
  },
  {
    symbol: 'NWSA',
    name: 'News Corp. Class A',
  },
  {
    symbol: 'NWS',
    name: 'News Corp. Class B',
  },
  {
    symbol: 'NEE',
    name: 'NextEra Energy',
  },
  {
    symbol: 'NLSN',
    name: 'Nielsen Holdings',
  },
  {
    symbol: 'NKE',
    name: 'Nike, Inc.',
  },
  {
    symbol: 'NI',
    name: 'NiSource Inc.',
  },
  {
    symbol: 'NBL',
    name: 'Noble Energy',
  },
  {
    symbol: 'NSC',
    name: 'Norfolk Southern Corp.',
  },
  {
    symbol: 'NTRS',
    name: 'Northern Trust Corp.',
  },
  {
    symbol: 'NOC',
    name: 'Northrop Grumman',
  },
  {
    symbol: 'NLOK',
    name: 'NortonLifeLock',
  },
  {
    symbol: 'NCLH',
    name: 'Norwegian Cruise Line Holdings',
  },
  {
    symbol: 'NRG',
    name: 'NRG Energy',
  },
  {
    symbol: 'NUE',
    name: 'Nucor Corp.',
  },
  {
    symbol: 'NVDA',
    name: 'Nvidia Corporation',
  },
  {
    symbol: 'NVR',
    name: 'NVR, Inc.',
  },
  {
    symbol: 'ORLY',
    name: "O'Reilly Automotive",
  },
  {
    symbol: 'OXY',
    name: 'Occidental Petroleum',
  },
  {
    symbol: 'ODFL',
    name: 'Old Dominion Freight Line',
  },
  {
    symbol: 'OMC',
    name: 'Omnicom Group',
  },
  {
    symbol: 'OKE',
    name: 'ONEOK',
  },
  {
    symbol: 'ORCL',
    name: 'Oracle Corp.',
  },
  {
    symbol: 'OTIS',
    name: 'Otis Worldwide',
  },
  {
    symbol: 'PCAR',
    name: 'PACCAR Inc.',
  },
  {
    symbol: 'PKG',
    name: 'Packaging Corporation of America',
  },
  {
    symbol: 'PH',
    name: 'Parker-Hannifin',
  },
  {
    symbol: 'PAYX',
    name: 'Paychex Inc.',
  },
  {
    symbol: 'PAYC',
    name: 'Paycom',
  },
  {
    symbol: 'PYPL',
    name: 'PayPal',
  },
  {
    symbol: 'PNR',
    name: 'Pentair plc',
  },
  {
    symbol: 'PBCT',
    name: "People's United Financial",
  },
  {
    symbol: 'PEP',
    name: 'PepsiCo Inc.',
  },
  {
    symbol: 'PKI',
    name: 'PerkinElmer',
  },
  {
    symbol: 'PRGO',
    name: 'Perrigo',
  },
  {
    symbol: 'PFE',
    name: 'Pfizer Inc.',
  },
  {
    symbol: 'PM',
    name: 'Philip Morris International',
  },
  {
    symbol: 'PSX',
    name: 'Phillips 66',
  },
  {
    symbol: 'PNW',
    name: 'Pinnacle West Capital',
  },
  {
    symbol: 'PXD',
    name: 'Pioneer Natural Resources',
  },
  {
    symbol: 'PNC',
    name: 'PNC Financial Services',
  },
  {
    symbol: 'PPG',
    name: 'PPG Industries',
  },
  {
    symbol: 'PPL',
    name: 'PPL Corp.',
  },
  {
    symbol: 'PFG',
    name: 'Principal Financial Group',
  },
  {
    symbol: 'PG',
    name: 'Procter & Gamble',
  },
  {
    symbol: 'PGR',
    name: 'Progressive Corp.',
  },
  {
    symbol: 'PLD',
    name: 'Prologis',
  },
  {
    symbol: 'PRU',
    name: 'Prudential Financial',
  },
  {
    symbol: 'PEG',
    name: 'Public Service Enterprise Group (PSEG)',
  },
  {
    symbol: 'PSA',
    name: 'Public Storage',
  },
  {
    symbol: 'PHM',
    name: 'PulteGroup',
  },
  {
    symbol: 'PVH',
    name: 'PVH Corp.',
  },
  {
    symbol: 'QRVO',
    name: 'Qorvo',
  },
  {
    symbol: 'PWR',
    name: 'Quanta Services Inc.',
  },
  {
    symbol: 'QCOM',
    name: 'QUALCOMM Inc.',
  },
  {
    symbol: 'DGX',
    name: 'Quest Diagnostics',
  },
  {
    symbol: 'RL',
    name: 'Ralph Lauren Corporation',
  },
  {
    symbol: 'RJF',
    name: 'Raymond James Financial Inc.',
  },
  {
    symbol: 'RTX',
    name: 'Raytheon Technologies',
  },
  {
    symbol: 'O',
    name: 'Realty Income Corporation',
  },
  {
    symbol: 'REG',
    name: 'Regency Centers Corporation',
  },
  {
    symbol: 'REGN',
    name: 'Regeneron Pharmaceuticals',
  },
  {
    symbol: 'RF',
    name: 'Regions Financial Corp.',
  },
  {
    symbol: 'RSG',
    name: 'Republic Services Inc',
  },
  {
    symbol: 'RMD',
    name: 'ResMed',
  },
  {
    symbol: 'RHI',
    name: 'Robert Half International',
  },
  {
    symbol: 'ROK',
    name: 'Rockwell Automation Inc.',
  },
  {
    symbol: 'ROL',
    name: 'Rollins Inc.',
  },
  {
    symbol: 'ROP',
    name: 'Roper Technologies',
  },
  {
    symbol: 'ROST',
    name: 'Ross Stores',
  },
  {
    symbol: 'RCL',
    name: 'Royal Caribbean Group',
  },
  {
    symbol: 'SPGI',
    name: 'S&P Global, Inc.',
  },
  {
    symbol: 'CRM',
    name: 'Salesforce.com',
  },
  {
    symbol: 'SBAC',
    name: 'SBA Communications',
  },
  {
    symbol: 'SLB',
    name: 'Schlumberger Ltd.',
  },
  {
    symbol: 'STX',
    name: 'Seagate Technology',
  },
  {
    symbol: 'SEE',
    name: 'Sealed Air',
  },
  {
    symbol: 'SRE',
    name: 'Sempra Energy',
  },
  {
    symbol: 'NOW',
    name: 'ServiceNow',
  },
  {
    symbol: 'SHW',
    name: 'Sherwin-Williams',
  },
  {
    symbol: 'SPG',
    name: 'Simon Property Group Inc',
  },
  {
    symbol: 'SWKS',
    name: 'Skyworks Solutions',
  },
  {
    symbol: 'SLG',
    name: 'SL Green Realty',
  },
  {
    symbol: 'SNA',
    name: 'Snap-on',
  },
  {
    symbol: 'SO',
    name: 'Southern Company',
  },
  {
    symbol: 'LUV',
    name: 'Southwest Airlines',
  },
  {
    symbol: 'SWK',
    name: 'Stanley Black & Decker',
  },
  {
    symbol: 'SBUX',
    name: 'Starbucks Corp.',
  },
  {
    symbol: 'STT',
    name: 'State Street Corp.',
  },
  {
    symbol: 'STE',
    name: 'STERIS plc',
  },
  {
    symbol: 'SYK',
    name: 'Stryker Corp.',
  },
  {
    symbol: 'SIVB',
    name: 'SVB Financial',
  },
  {
    symbol: 'SYF',
    name: 'Synchrony Financial',
  },
  {
    symbol: 'SNPS',
    name: 'Synopsys Inc.',
  },
  {
    symbol: 'SYY',
    name: 'Sysco Corp.',
  },
  {
    symbol: 'TMUS',
    name: 'T-Mobile US',
  },
  {
    symbol: 'TROW',
    name: 'T. Rowe Price Group',
  },
  {
    symbol: 'TTWO',
    name: 'Take-Two Interactive',
  },
  {
    symbol: 'TPR',
    name: 'Tapestry, Inc.',
  },
  {
    symbol: 'TGT',
    name: 'Target Corp.',
  },
  {
    symbol: 'TEL',
    name: 'TE Connectivity Ltd.',
  },
  {
    symbol: 'FTI',
    name: 'TechnipFMC',
  },
  {
    symbol: 'TDY',
    name: 'Teledyne Technologies',
  },
  {
    symbol: 'TFX',
    name: 'Teleflex',
  },
  {
    symbol: 'TXN',
    name: 'Texas Instruments',
  },
  {
    symbol: 'TXT',
    name: 'Textron Inc.',
  },
  {
    symbol: 'TMO',
    name: 'Thermo Fisher Scientific',
  },
  {
    symbol: 'TIF',
    name: 'Tiffany & Co.',
  },
  {
    symbol: 'TJX',
    name: 'TJX Companies Inc.',
  },
  {
    symbol: 'TSCO',
    name: 'Tractor Supply Company',
  },
  {
    symbol: 'TT',
    name: 'Trane Technologies plc',
  },
  {
    symbol: 'TDG',
    name: 'TransDigm Group',
  },
  {
    symbol: 'TRV',
    name: 'The Travelers Companies Inc.',
  },
  {
    symbol: 'TFC',
    name: 'Truist Financial',
  },
  {
    symbol: 'TWTR',
    name: 'Twitter, Inc.',
  },
  {
    symbol: 'TYL',
    name: 'Tyler Technologies',
  },
  {
    symbol: 'TSN',
    name: 'Tyson Foods',
  },
  {
    symbol: 'UDR',
    name: 'UDR, Inc.',
  },
  {
    symbol: 'ULTA',
    name: 'Ulta Beauty',
  },
  {
    symbol: 'USB',
    name: 'U.S. Bancorp',
  },
  {
    symbol: 'UAA',
    name: 'Under Armour (Class A)',
  },
  {
    symbol: 'UA',
    name: 'Under Armour (Class C)',
  },
  {
    symbol: 'UNP',
    name: 'Union Pacific Corp',
  },
  {
    symbol: 'UAL',
    name: 'United Airlines Holdings',
  },
  {
    symbol: 'UNH',
    name: 'United Health Group Inc.',
  },
  {
    symbol: 'UPS',
    name: 'United Parcel Service',
  },
  {
    symbol: 'URI',
    name: 'United Rentals, Inc.',
  },
  {
    symbol: 'UHS',
    name: 'Universal Health Services',
  },
  {
    symbol: 'UNM',
    name: 'Unum Group',
  },
  {
    symbol: 'VFC',
    name: 'VF Corporation',
  },
  {
    symbol: 'VLO',
    name: 'Valero Energy',
  },
  {
    symbol: 'VAR',
    name: 'Varian Medical Systems',
  },
  {
    symbol: 'VTR',
    name: 'Ventas Inc',
  },
  {
    symbol: 'VRSN',
    name: 'Verisign Inc.',
  },
  {
    symbol: 'VRSK',
    name: 'Verisk Analytics',
  },
  {
    symbol: 'VZ',
    name: 'Verizon Communications',
  },
  {
    symbol: 'VRTX',
    name: 'Vertex Pharmaceuticals Inc',
  },
  {
    symbol: 'VIAC',
    name: 'ViacomCBS',
  },
  {
    symbol: 'V',
    name: 'Visa Inc.',
  },
  {
    symbol: 'VNO',
    name: 'Vornado Realty Trust',
  },
  {
    symbol: 'VMC',
    name: 'Vulcan Materials',
  },
  {
    symbol: 'WRB',
    name: 'W. R. Berkley Corporation',
  },
  {
    symbol: 'WAB',
    name: 'Wabtec Corporation',
  },
  {
    symbol: 'WMT',
    name: 'Walmart',
  },
  {
    symbol: 'WBA',
    name: 'Walgreens Boots Alliance',
  },
  {
    symbol: 'DIS',
    name: 'The Walt Disney Company',
  },
  {
    symbol: 'WM',
    name: 'Waste Management Inc.',
  },
  {
    symbol: 'WAT',
    name: 'Waters Corporation',
  },
  {
    symbol: 'WEC',
    name: 'WEC Energy Group',
  },
  {
    symbol: 'WFC',
    name: 'Wells Fargo',
  },
  {
    symbol: 'WELL',
    name: 'Welltower Inc.',
  },
  {
    symbol: 'WST',
    name: 'West Pharmaceutical Services',
  },
  {
    symbol: 'WDC',
    name: 'Western Digital',
  },
  {
    symbol: 'WU',
    name: 'Western Union Co',
  },
  {
    symbol: 'WRK',
    name: 'WestRock',
  },
  {
    symbol: 'WY',
    name: 'Weyerhaeuser',
  },
  {
    symbol: 'WHR',
    name: 'Whirlpool Corp.',
  },
  {
    symbol: 'WMB',
    name: 'Williams Companies',
  },
  {
    symbol: 'WLTW',
    name: 'Willis Towers Watson',
  },
  {
    symbol: 'WYNN',
    name: 'Wynn Resorts Ltd',
  },
  {
    symbol: 'XEL',
    name: 'Xcel Energy Inc',
  },
  {
    symbol: 'XRX',
    name: 'Xerox',
  },
  {
    symbol: 'XLNX',
    name: 'Xilinx',
  },
  {
    symbol: 'XYL',
    name: 'Xylem Inc.',
  },
  {
    symbol: 'YUM',
    name: 'Yum! Brands Inc',
  },
  {
    symbol: 'ZBRA',
    name: 'Zebra Technologies',
  },
  {
    symbol: 'ZBH',
    name: 'Zimmer Biomet Holdings',
  },
  {
    symbol: 'ZION',
    name: 'Zions Bancorp',
  },
  {
    symbol: 'ZTS',
    name: 'Zoetis',
  },
  {
    symbol: 'SPX',
    name: 'S&P 500 INDEX',
  },
  {
    symbol: 'IXIC',
    name: 'NASDAQ COMPOSITE INDEX',
  },
  {
    symbol: 'DJI',
    name: 'DOW JONES INDUSTRIAL AVERAGE INDEX',
  },
  {
    symbol: 'VIX',
    name: 'VOLATILITY S&P 500 INDEX',
  },
  {
    symbol: 'TSX',
    name: 'S&P/TSX COMPOSITE INDEX',
  },
  {
    symbol: 'UKX',
    name: 'UK 100 INDEX',
  },
  {
    symbol: 'DAX',
    name: 'DAX INDEX',
  },
  {
    symbol: 'PX1',
    name: 'CAC 40 INDEX',
  },
  {
    symbol: 'FTMIB',
    name: 'MILANO ITALIA BORSA INDEX',
  },
  {
    symbol: 'NI225',
    name: 'NIKKEI 225 INDEX',
  },
  {
    symbol: 'KOSPI',
    name: 'KOREA COMPOSITE STOCK PRICE INDEX',
  },
  {
    symbol: 'SHCOMP',
    name: 'SHANGHAI COMPOSITE INDEX',
  },
  {
    symbol: '399001',
    name: 'SZSE COMPONENT INDEX',
  },
  {
    symbol: 'HSI',
    name: 'HANG SENG INDEX',
  },
  {
    symbol: 'STI',
    name: 'STRAITS TIMES INDEX',
  },
  {
    symbol: 'XJO',
    name: 'S&P/ASX 200 INDEX',
  },
  {
    symbol: 'NZ50G',
    name: 'S&P / NZX 50 INDEX GROSS',
  },
  {
    symbol: 'TAIEX',
    name: 'TAIWAN CAPITALIZATION WEIGHTED STOCK INDEX',
  },
  {
    symbol: 'FBMKLCI',
    name: 'FTSE BURSA MALAYSIA KLCI INDEX',
  },
  {
    symbol: 'COMPOSITE',
    name: 'IDX COMPOSITE INDEX',
  },
  {
    symbol: 'SX5E',
    name: 'EURO STOXX 50 INDEX',
  },
  {
    symbol: 'IBC',
    name: 'IBEX 35 INDEX',
  },
  {
    symbol: 'SMI',
    name: 'SWISS MARKET INDEX',
  },
  {
    symbol: 'WIG20',
    name: 'WIG20 INDEX',
  },
  {
    symbol: 'AEX',
    name: 'AEX INDEX',
  },
  {
    symbol: 'BEL20',
    name: 'BEL 20 INDEX',
  },
  {
    symbol: 'IMOEX',
    name: 'MOEX RUSSIA INDEX',
  },
  {
    symbol: 'OMXH25',
    name: 'OMX HELSINKI 25 INDEX',
  },
  {
    symbol: 'OMXI10',
    name: 'OMX ICELAND 10',
  },
  {
    symbol: 'OMXS30',
    name: 'OMX STOCKHOLM 30 INDEX',
  },
  {
    symbol: 'OMXC25',
    name: 'OMX COPENHAGEN 25 INDEX',
  },
  {
    symbol: 'BELEX15',
    name: 'BELEX 15 INDEX',
  },
  {
    symbol: 'OMXRGI',
    name: 'OMX RIGA GI',
  },
  {
    symbol: 'OMXTGI',
    name: 'OMX TALLINN GI',
  },
  {
    symbol: 'OMXVGI',
    name: 'OMX VILNIUS GI',
  },
  {
    symbol: 'XU100',
    name: 'BIST 100 INDEX',
  },
  {
    symbol: 'TA35',
    name: 'TA-35 INDEX',
  },
  {
    symbol: 'SA40',
    name: 'SOUTH AFRICA TOP 40 INDEX',
  },
  {
    symbol: 'NIFTY',
    name: 'NIFTY 50 INDEX',
  },
  {
    symbol: 'SENSEX',
    name: 'S&P BSE SENSEX INDEX',
  },
  {
    symbol: 'DFMGI',
    name: 'DFM INDEX',
  },
  {
    symbol: 'TASI',
    name: 'TADAWUL ALL SHARES INDEX',
  },
  {
    symbol: 'GNRI',
    name: 'QE INDEX',
  },
  {
    symbol: 'BSEX',
    name: 'BAHRAIN ALL SHARE INDEX',
  },
  {
    symbol: 'NSE30',
    name: 'NSE 30 INDEX',
  },
  {
    symbol: 'EGX30',
    name: 'EGX 30 PRICE RETURN INDEX',
  },
  {
    symbol: 'IBOV',
    name: 'IBOVESPA INDEX',
  },
  {
    symbol: 'ME',
    name: 'IPC MEXICO INDEX',
  },
  {
    symbol: 'IMV',
    name: 'MERVAL INDEX',
  },
  {
    symbol: 'ICAP',
    name: 'INDICE DE CAPITALIZACION BURSATIL',
  },
  {
    symbol: 'SP_IPSA',
    name: 'S&P IPSA',
  },
  {
    symbol: 'SPBLPGPT',
    name: 'S&P / BVL PERU GENERAL INDEX (PEN) ',
  },
  {
    symbol: 'EURUSD',
    name: 'EURO / U.S. DOLLAR',
  },
  {
    symbol: 'USDJPY',
    name: 'U.S. DOLLAR / JAPANESE YEN',
  },
  {
    symbol: 'GBPUSD',
    name: 'BRITISH POUND / U.S. DOLLAR',
  },
  {
    symbol: 'AUDUSD',
    name: 'AUSTRALIAN DOLLAR / U.S. DOLLAR',
  },
  {
    symbol: 'USDCAD',
    name: 'U.S. DOLLAR / CANADIAN DOLLAR',
  },
  {
    symbol: 'USDCHF',
    name: 'U.S. DOLLAR / SWISS FRANC',
  },
  {
    symbol: 'NZDUSD',
    name: 'NEW ZEALAND DOLLAR / U.S. DOLLAR ',
  },
  {
    symbol: 'EURGBP',
    name: 'EURO / BRITISH POUND',
  },
  {
    symbol: 'EURAUD',
    name: 'EURO / AUSTRALIAN DOLLAR',
  },
  {
    symbol: 'EURCAD',
    name: 'EURO / CANADIAN DOLLAR',
  },
  {
    symbol: 'EURCHF',
    name: 'EURO / SWISS FRANC',
  },
  {
    symbol: 'EURJPY',
    name: 'EURO / JAPANESE YEN',
  },
  {
    symbol: 'EURNZD',
    name: 'EURO / NEW ZEALAND DOLLAR',
  },
  {
    symbol: 'GBPEUR',
    name: 'BRITISH POUND / EURO',
  },
  {
    symbol: 'GBPJPY',
    name: 'BRITISH POUND / JAPANESE YEN',
  },
  {
    symbol: 'GBPAUD',
    name: 'BRITISH POUND / AUSTRALIAN DOLLAR',
  },
  {
    symbol: 'GBPCAD',
    name: 'BRITISH POUND / CANADIAN DOLLAR',
  },
  {
    symbol: 'GBPCHF',
    name: 'BRITISH POUND / SWISS FRANC',
  },
  {
    symbol: 'GBPNZD',
    name: 'BRITISH POUND / NEW ZEALAND DOLLAR',
  },
  {
    symbol: 'JPYAUD',
    name: 'JAPANESE YEN / AUSTRALIAN DOLLAR',
  },
  {
    symbol: 'JPYCAD',
    name: 'JAPANESE YEN / CANADIAN DOLLAR',
  },
  {
    symbol: 'JPYCHF',
    name: 'JAPANESE YEN / SWISS FRANC',
  },
  {
    symbol: 'JPYEUR',
    name: 'JAPANESE YEN / EURO',
  },
  {
    symbol: 'JPYGBP',
    name: 'JAPANESE YEN / BRITISH POUND',
  },
  {
    symbol: 'JPYNZD',
    name: 'JAPANESE YEN / NEW ZEALAND DOLLAR',
  },
  {
    symbol: 'AUDCAD',
    name: 'AUSTRALIAN DOLLAR/CANADIAN DOLLAR',
  },
  {
    symbol: 'AUDCHF',
    name: 'AUSTRALIAN DOLLAR / SWISS FRANC',
  },
  {
    symbol: 'AUDEUR',
    name: 'AUSTRALIAN DOLLAR / EURO',
  },
  {
    symbol: 'AUDGBP',
    name: 'AUSTRALIAN DOLLAR / BRITISH POUND',
  },
  {
    symbol: 'AUDJPY',
    name: 'AUSTRALIAN DOLLAR / JAPANESE YEN',
  },
  {
    symbol: 'AUDNZD',
    name: 'AUSTRALIAN DOLLAR / NEW ZEALAND DOLLAR',
  },
  {
    symbol: 'CADAUD',
    name: 'CANADIAN DOLLAR / AUSTRALIAN DOLLAR',
  },
  {
    symbol: 'CADCHF',
    name: 'CANADIAN DOLLAR / SWISS FRANC',
  },
  {
    symbol: 'CADEUR',
    name: 'CANADIAN DOLLAR / EURO',
  },
  {
    symbol: 'CADGBP',
    name: 'CANADIAN DOLLAR / BRITISH POUND',
  },
  {
    symbol: 'CADJPY',
    name: 'CANADIAN DOLLAR / JAPANESE YEN',
  },
  {
    symbol: 'CADNZD',
    name: 'CANADIAN DOLLAR / NEW ZEALAND DOLLAR',
  },
  {
    symbol: 'CHFAUD',
    name: 'SWISS FRANC / AUSTRALIAN DOLLAR',
  },
  {
    symbol: 'CHFCAD',
    name: 'SWISS FRANC / CANADIAN DOLLAR',
  },
  {
    symbol: 'CHFEUR',
    name: 'SWISS FRANC / EURO',
  },
  {
    symbol: 'CHFGBP',
    name: 'SWISS FRANC / BRITISH POUND',
  },
  {
    symbol: 'CHFJPY',
    name: 'SWISS FRANC / JAPANESE YEN',
  },
  {
    symbol: 'CHFNZD',
    name: 'SWISS FRANC / NEW ZEALAND DOLLAR',
  },
  {
    symbol: 'NZDAUD',
    name: 'NEW ZEALAND DOLLAR / AUSTRALIAN DOLLAR',
  },
  {
    symbol: 'NZDCAD',
    name: 'NEW ZEALAND DOLLAR / CANADIAN DOLLAR',
  },
  {
    symbol: 'NZDCHF',
    name: 'NEW ZEALAND DOLLAR / SWISS FRANC',
  },
  {
    symbol: 'NZDEUR',
    name: 'NEW ZEALAND DOLLAR / EURO',
  },
  {
    symbol: 'NZDJPY',
    name: 'NEW ZEALAND DOLLAR / JAPANESE YEN',
  },
  {
    symbol: 'NZDGBP',
    name: 'NEW ZEALAND DOLLAR / BRITISH POUND ',
  },
  {
    symbol: 'USDBRL',
    name: 'U.S. DOLLAR / BRAZILIAN REAL',
  },
  {
    symbol: 'USDCNH',
    name: 'U.S. DOLLAR / OFFSHORE CHINESE YUAN',
  },
  {
    symbol: 'USDCZK',
    name: 'U.S. DOLLAR / CZECH KORUNA',
  },
  {
    symbol: 'USDDKK',
    name: 'U.S. DOLLAR / DANISH KRONE',
  },
  {
    symbol: 'USDHKD',
    name: 'U.S. DOLLAR / HONG KONG DOLLAR',
  },
  {
    symbol: 'USDHRK',
    name: 'U.S. DOLLAR / CROATIAN KUNA',
  },
  {
    symbol: 'USDHUF',
    name: 'U.S. DOLLAR / HUNGARIAN FORINT',
  },
  {
    symbol: 'USDINR',
    name: 'U.S. DOLLAR / INDIAN RUPEE',
  },
  {
    symbol: 'USDMXN',
    name: 'U.S. DOLLAR / MEXICAN PESO',
  },
  {
    symbol: 'USDNOK',
    name: 'U.S. DOLLAR / NORWEGIAN KRONE',
  },
  {
    symbol: 'USDPLN',
    name: 'U.S. DOLLAR / POLISH ZLOTY',
  },
  {
    symbol: 'USDRON',
    name: 'U.S. DOLLAR / ROMANIAN LEU',
  },
  {
    symbol: 'USDRUB',
    name: 'U.S. DOLLAR / RUSSIAN RUBLE',
  },
  {
    symbol: 'USDSAR',
    name: 'U.S. DOLLAR / SAUDI ARABIAN RIYAL',
  },
  {
    symbol: 'USDSEK',
    name: 'U.S. DOLLAR / SWEDISH KRONA',
  },
  {
    symbol: 'USDSGD',
    name: 'U.S. DOLLAR / SINGAPORE DOLLAR',
  },
  {
    symbol: 'USDTHB',
    name: 'U.S. DOLLAR / THAI BAHT',
  },
  {
    symbol: 'USDTRY',
    name: 'U.S. DOLLAR / TURKISH LIRA',
  },
  {
    symbol: 'USDZAR',
    name: 'U.S. DOLLAR / SOUTH AFRICAN RAND',
  },
  {
    symbol: 'EURCZK',
    name: 'EURO / CZECH KORUNA',
  },
  {
    symbol: 'EURDKK',
    name: 'EURO / DANISH KRONE',
  },
  {
    symbol: 'EURHKD',
    name: 'EURO / HONG KONG DOLLAR',
  },
  {
    symbol: 'EURHUF',
    name: 'EURO / HUNGARIAN FORINT',
  },
  {
    symbol: 'EURMXN',
    name: 'EURO / MEXICAN PESO',
  },
  {
    symbol: 'EURNOK',
    name: 'EURO / NORWEGIAN KRONE',
  },
  {
    symbol: 'EURPLN',
    name: 'EURO / POLISH ZLOTY',
  },
  {
    symbol: 'EURRON',
    name: 'EURO / ROMANIAN LEU',
  },
  {
    symbol: 'EURRUB',
    name: 'EURO / RUSSIAN RUBLE',
  },
  {
    symbol: 'EURSEK',
    name: 'EURO / SWEDISH KRONA',
  },
  {
    symbol: 'EURSGD',
    name: 'EURO / SINGAPORE DOLLAR',
  },
  {
    symbol: 'EURTRY',
    name: 'EURO / TURKISH LIRA',
  },
  {
    symbol: 'EURZAR',
    name: 'EURO / SOUTH AFRICAN RAND',
  },
  {
    symbol: 'GBPDKK',
    name: 'BRITISH POUND / DANISH KRONE',
  },
  {
    symbol: 'GBPHKD',
    name: 'BRITISH POUND / HONG KONG DOLLAR',
  },
  {
    symbol: 'GBPHUF',
    name: 'BRITISH POUND / HUNGARIAN FORINT',
  },
  {
    symbol: 'GBPNOK',
    name: 'BRITISH POUND / NORWEGIAN KRONE',
  },
  {
    symbol: 'GBPPLN',
    name: 'BRITISH POUND / POLISH ZLOTY',
  },
  {
    symbol: 'GBPRON',
    name: 'BRITISH POUND / ROMANIAN LEU',
  },
  {
    symbol: 'GBPSEK',
    name: 'BRITISH POUND / SWEDISH KRONA',
  },
  {
    symbol: 'GBPSGD',
    name: 'BRITISH POUND / SINGAPORE DOLLAR',
  },
  {
    symbol: 'GBPTRY',
    name: 'BRITISH POUND / TURKISH LIRA',
  },
  {
    symbol: 'GBPZAR',
    name: 'BRITISH POUND / SOUTH AFRICAN RAND',
  },
  {
    symbol: 'CHFDKK',
    name: 'SWISS FRANC / DANISH KRONE',
  },
  {
    symbol: 'CHFHKD',
    name: 'SWISS FRANC / HONG KONG DOLLAR',
  },
  {
    symbol: 'CHFHUF',
    name: 'SWISS FRANC / HUNGARIAN FORINT',
  },
  {
    symbol: 'CHFNOK',
    name: 'SWISS FRANC / NORWEGIAN KRONE',
  },
  {
    symbol: 'CHFPLN',
    name: 'SWISS FRANC / POLISH ZLOTY',
  },
  {
    symbol: 'CHFSEK',
    name: 'SWISS FRANC / SWEDISH KRONA',
  },
  {
    symbol: 'CHFSGD',
    name: 'SWISS FRANC / SINGAPORE DOLLAR',
  },
  {
    symbol: 'CHFTRY',
    name: 'SWISS FRANC / TURKISH LIRA',
  },
  {
    symbol: 'CHFZAR',
    name: 'SWISS FRANC / SOUTH AFRICAN RAND',
  },
  {
    symbol: 'AUDHKD',
    name: 'AUSTRALIAN DOLLAR / HONG KONG DOLLAR',
  },
  {
    symbol: 'AUDSGD',
    name: 'AUSTRALIAN DOLLAR / SINGAPORE DOLLAR',
  },
  {
    symbol: 'CADHKD',
    name: 'CANADIAN DOLLAR / HONG KONG DOLLAR',
  },
  {
    symbol: 'CADSGD',
    name: 'CANADIAN DOLLAR / SINGAPORE DOLLAR',
  },
  {
    symbol: 'NZDHKD',
    name: 'NEW ZEALAND DOLLAR / HONG KONG DOLLAR',
  },
  {
    symbol: 'NZDSGD',
    name: 'NEW ZEALAND DOLLAR / SINGAPORE DOLLAR',
  },
  {
    symbol: 'HKDJPY',
    name: 'HONG KONG DOLLAR / JAPANESE YEN',
  },
  {
    symbol: 'MXNJPY',
    name: 'MEXICAN PESO / JAPANESE YEN',
  },
  {
    symbol: 'NOKJPY',
    name: 'NORWEGIAN KRONE / JAPANESE YEN',
  },
  {
    symbol: 'NOKSEK',
    name: 'NORWEGIAN KRONE / SWEDISH KRONA',
  },
  {
    symbol: 'SEKJPY',
    name: 'SWEDISH KRONA / JAPANESE YEN',
  },
  {
    symbol: 'SGDCHF',
    name: 'SINGAPORE DOLLAR / SWISS FRANC',
  },
  {
    symbol: 'SGDHKD',
    name: 'SINGAPORE DOLLAR / HONG KONG DOLLAR',
  },
  {
    symbol: 'SGDJPY',
    name: 'SINGAPORE DOLLAR / JAPANESE YEN',
  },
  {
    symbol: 'TRYJPY',
    name: 'TURKISH LIRA / JAPANESE YEN',
  },
  {
    symbol: 'ZARJPY',
    name: 'SOUTH AFRICAN RAND / JAPANESE YEN ',
  },
];
export default tickers;
