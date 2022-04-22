export interface Story {
    broadcast: null;
    reel: Reel | null;
    status: string;
}

export interface Reel {
    id: number;
    latest_reel_media: number;
    expiring_at: number;
    seen: number;
    can_reply: boolean;
    can_gif_quick_reply: boolean;
    can_reshare: boolean;
    can_react_with_avatar: boolean;
    reel_type: string;
    ad_expiry_timestamp_in_millis: any;
    is_cta_sticker_available: any;
    user: User;
    items: Item[];
    prefetch_count: number;
    has_besties_media: boolean;
    media_count: number;
    media_ids: string[];
    has_fan_club_media: boolean;
}

export interface User {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    friendship_status: FriendshipStatus;
    is_verified: boolean;
    follow_friction_type: number;
    growth_friction_info: GrowthFrictionInfo;
    account_badges: any[];
}

export interface FriendshipStatus {
    following: boolean;
    followed_by: boolean;
    blocking: boolean;
    muting: boolean;
    is_private: boolean;
    incoming_request: boolean;
    outgoing_request: boolean;
    is_bestie: boolean;
    is_restricted: boolean;
    is_feed_favorite: boolean;
}

export interface GrowthFrictionInfo {
    has_active_interventions: boolean;
    interventions: Interventions;
}

export interface Interventions {}

export interface Item {
    taken_at: number;
    pk: string;
    id: string;
    device_timestamp: number;
    media_type: number;
    code: string;
    client_cache_key: string;
    filter_type: number;
    is_unified_video: boolean;
    user: User2;
    caption_is_edited: boolean;
    like_and_view_counts_disabled: boolean;
    commerciality_status: string;
    is_paid_partnership: boolean;
    is_visual_reply_commenter_notice_enabled: boolean;
    original_media_has_visual_reply_media: boolean;
    image_versions2: ImageVersions2;
    original_width: number;
    original_height: number;
    caption_position: number;
    is_reel_media: boolean;
    photo_of_you: boolean;
    is_organic_product_tagging_eligible: boolean;
    can_see_insights_as_brand: boolean;
    caption: any;
    can_viewer_save: boolean;
    organic_tracking_token: string;
    expiring_at: number;
    imported_taken_at: number;
    has_shared_to_fb: number;
    sharing_friction_info: SharingFrictionInfo;
    comment_inform_treatment: CommentInformTreatment;
    product_type: string;
    is_in_profile_grid: boolean;
    profile_grid_control_enabled: boolean;
    deleted_reason: number;
    integrity_review_decision: string;
    music_metadata: any;
    can_reshare: boolean;
    can_reply: boolean;
    story_static_models: any[];
    supports_reel_reactions: boolean;
    can_send_custom_emojis: boolean;
    show_one_tap_fb_share_tooltip: boolean;
}

export interface User2 {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    is_verified: boolean;
    follow_friction_type: number;
    growth_friction_info: GrowthFrictionInfo2;
    account_badges: any[];
    has_anonymous_profile_picture: boolean;
    is_unpublished: boolean;
    is_favorite: boolean;
    has_highlight_reels: boolean;
    has_primary_country_in_feed: boolean;
    has_primary_country_in_profile: boolean;
}

export interface GrowthFrictionInfo2 {
    has_active_interventions: boolean;
    interventions: Interventions2;
}

export interface Interventions2 {}

export interface ImageVersions2 {
    candidates: Candidate[];
}

export interface Candidate {
    width: number;
    height: number;
    url: string;
}

export interface SharingFrictionInfo {
    should_have_sharing_friction: boolean;
    bloks_app_url: any;
    sharing_friction_payload: any;
}

export interface CommentInformTreatment {
    should_have_inform_treatment: boolean;
    text: string;
    url: any;
    action_type: any;
}
