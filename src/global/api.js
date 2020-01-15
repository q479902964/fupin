import request from './axios';
// const prefix = 'http://47.99.183.164:8080/reliefmgr/'
const account = localStorage.getItem('_account');

export function loginApi(params = {}) {
  return request({
    url: '/reliefmgr/login',
    params,
    method: 'POST'
  })
}

export function loginOutApi(params = {}) {
  return request({
    url: '/reliefmgr/logout',
    params,
    method: 'POST'
  })
}


export function indexApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentList',
    params,
    method: 'POST'
  })
}

export function infoApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMgr',
    params,
    method: 'POST'
  })
}


// 查看个人信息
export function basicInfoApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentView',
    params,
    method: 'POST'
  })
}

// 添加个人信息
export function addBasicInfoApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMgr',
    params,
    method: 'POST'
  })
}

// 添加家庭信息
export function addFamilyApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentFamilyBasicInformationMgr',
    params,
    method: 'POST'
  })
}

// 查看家庭信息
export function familyApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentFamilyBasicInformationList',
    params,
    method: 'POST'
  })
}


// 添加教育经历
export function addEducationApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentEducationMgr',
    params,
    method: 'POST'
  })
}

// 获取教育列表
export function educationApi(params = {}) {
  params.account = account;
  return request({
    url :'/reliefmgr/residentEducationList',
    params,
    method: 'POST'
  })
}

// 获取教育详情
export function educationDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentEducationView',
    params,
    method: 'POST'
  })
}

// 获取就业详情
export function workDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentWorkExperienceView',
    params,
    method: 'POST'
  })
}

// 获取就业列表
export function workListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentWorkExperienceList',
    params,
    method: 'POST'
  })
}

// 添加就业
export function addWorkApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentWorkExperienceMgr',
    params,
    method: 'POST'
  })
}

// 添加年收入
export function addIncomeApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAnnualIncomeMgr',
    params,
    method: 'POST'
  })
}

// 年收入信息列表
export function incomeListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAnnualIncomeList',
    params,
    method: 'POST'
  })
}

// 年收入详情
export function incomeDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAnnualIncomeView',
    params,
    method: 'POST'
  })
}

// 婚姻详情
export function marriageDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMaritalStatusView',
    params,
    method: 'POST'
  })
}

// 婚姻列表
export function marriageListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMaritalStatusList',
    params,
    method: 'POST'
  })
}

// 添加婚姻
export function addMarriageApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMaritalStatusMgr',
    params,
    method: 'POST'
  })
}

// 迁移详情
export function migrationDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMigrationView',
    params,
    method: 'POST'
  })
}

// 添加迁移信息
export function migrationListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMigrationList',
    params,
    method: 'POST'
  })
}


// 迁移列表
export function addMigrationApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentMigrationMgr',
    params,
    method: 'POST'
  })
}

// 家庭公有资产列表
export function familyAssetListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentHouseholdAssetPublicList',
    params,
    method: 'POST'
  })
}

// 家庭公有资产详情
export function familyAssetDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentHouseholdAssetPublicView',
    params,
    method: 'POST'
  })
}


// 添加家庭公有资产
export function addFamilyAssetApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentHouseholdAssetPublicMgr',
    params,
    method: 'POST'
  })
}

// 个人房产信息列表
export function houseListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetHouseList',
    params,
    method: 'POST'
  })
}

// 个人房产信息详情
export function houseDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetHouseView',
    params,
    method: 'POST'
  })
}

// 添加个人房产信息
export function addHouseApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetHouseMgr',
    params,
    method: 'POST'
  })
}

// 个人土地信息列表
export function personalLandListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetLandList',
    params,
    method: 'POST'
  })
}

// 个人土地信息详情
export function personalLandDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetLandView',
    params,
    method: 'POST'
  })
}

// 添加个人土地信息
export function addPersonalLandApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetLandMgr',
    params,
    method: 'POST'
  })
}

// 个人车辆列表
export function vehicleListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetVehicleList',
    params,
    method: 'POST'
  })
}
// 个人车辆详情
export function vehicleDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetVehicleView',
    params,
    method: 'POST'
  })
}
// 添加个人车辆
export function addVehicleApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetVehicleMgr',
    params,
    method: 'POST'
  })
}


// 个人农机信息列表
export function farmingListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetFarmMachineryList',
    params,
    method: 'POST'
  })
}
// 个人农机信息详情
export function farmingDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetFarmMachineryView',
    params,
    method: 'POST'
  })
}
// 添加个人农机信息
export function addFarmingApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetFarmMachineryMgr',
    params,
    method: 'POST'
  })
}
// 个人牲畜信息列表
export function livestockListApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetLivestockList',
    params,
    method: 'POST'
  })
}
// 个人牲畜信息详情
export function livestockDetailApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetLivestockView',
    params,
    method: 'POST'
  })
}
// 添加个人牲畜信息
export function addLivestockApi(params = {}) {
  params.account = account;
  return request({
    url: '/reliefmgr/residentAssetLivestockMgr',
    params,
    method: 'POST'
  })
}

// 获取所属村落
export function villageListApi(params = {}) {
  return request({
    url: '/reliefmgr/villageList',
    params,
    method: 'POST'
  })
}

// 党员信息列表
export function partyMemberListApi(params = {}) {
  return request({
    url: '/reliefmgr/residentPartyMembersList',
    params,
    method: 'POST'
  })
}

// 党员信息详情
export function partyMemberDetailApi(params = {}) {
  return request({
    url: '/reliefmgr/residentPartyMembersView',
    params,
    method: 'POST'
  })
}

// 增加党员信息
export function addPartyMemberApi(params = {}) {
  return request({
    url: '/reliefmgr/residentPartyMembersMgr',
    params,
    method: 'POST'
  })
}

// 退役军人信息列表
export function retireListApi(params = {}) {
  return request({
    url: '/reliefmgr/residentExServicemenList',
    params,
    method: 'POST'
  })
}

// 退役军人信息详情
export function retireDetailApi(params = {}) {
  return request({
    url: '/reliefmgr/residentExServicemenView',
    params,
    method: 'POST'
  })
}

// 增加退役军人信息
export function addRetireApi(params = {}) {
  return request({
    url: '/reliefmgr/residentExServicemenMgr',
    params,
    method: 'POST'
  })
}


export const model = {
  basicInfoApi,
  addBasicInfoApi,
  educationApi,
  workListApi,
  incomeListApi,
  marriageListApi,
  migrationListApi,
  familyAssetListApi,
  partyMemberListApi,
  partyMemberDetailApi,
  addPartyMemberApi,
  retireListApi,
  retireDetailApi,
  addRetireApi
}
