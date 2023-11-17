(function($){

  	'use strict';

  	jQuery.fn.exists = function(){return this.length>0;}

    $( window ).on('load', function() {

        if( jQuery(".crisp-client").exists() ) {
            jQuery("#go-to-top").css("bottom", 90);
        }

    });

    $(document).ready(function (e) {

        jQuery("a.external").attr("target","_blank");

        if( jQuery(".royaltickets-buy-now-buttons").exists() ) {
            jQuery(".side-social-links" ).css('bottom', '90px');
        }

        if( jQuery(".counter").exists() ) {
            jQuery('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        }

        var e = document.querySelectorAll('[data-toggle="typed"]');
        "undefined" != typeof Typed && e && [].forEach.call(e, function(e) {
            ! function(e) {
                var t = e.dataset.options;
                t = t ? JSON.parse(t) : {};
                var a = Object.assign({
                    typeSpeed: 40,
                    backSpeed: 30,
                    backDelay: 2100,
                    loop: !0
                }, t);
                new Typed(e, a)
            }(e)
        })

        if( jQuery(".payment-types").exists() ) {
            jQuery(".payment-types > .rt-custom-control:first-child .custom-control-input" ).prop("checked", true);
        }

        if( jQuery(".ft-tabs-alt").exists() ) {
            jQuery('.tab-content > .tab-pane.tab-pane-alt').each(function(){
                var tab_id = jQuery(this).data("id");
                jQuery(this).find(".tab-pane-alt-bg.bg-"+tab_id).appendTo(".vertical-line");
                jQuery(".vertical-line .tab-pane-alt-bg").removeClass("d-none");
            });
        }

        $(document).off('click.bs.tab.data-api', '[data-hover="tab_hover"]');
        $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab_hover"], [data-hover="tab_hover"]', function () {
            $(this).tab('show');
        });
        $(document).on('click', '[data-toggle="tab_hover"], [data-hover="tab_hover"]', function (e) {
            e.preventDefault();
        });

        if( jQuery(".skroll-parallax").exists() ) {
            var s = skrollr.init({  
                forceHeight: false,        
                mobileCheck: function() {
                    //hack - forces mobile version to be off
                    return false;
                }
            });
            vc_rowBehaviour();
        }

        if( jQuery(".main-menu").exists() ) {

            // Cache selectors
            var lastId,
                topMenu = $(".main-menu"),
                topMenuHeight = topMenu.outerHeight() + 15,
                // All list items
                menuItems = topMenu.find("a"),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
                        var item = $(this.hash);
                        var hash_id = this.hash.substring(1);
                        item = item.length ? item : $('[name="' + this.hash.slice(1) + '"]');

                        if (item.length) { 
                            jQuery(this).parent().removeClass('current_page_item').removeClass('current-menu-item');
                            jQuery(this).addClass("inner-section-link-" + hash_id);
                            return item; 
                        }
                    }
                });

        }

        jQuery('.main-menu a[href*="#"]').not('.main-menu [href="#"]').not('.main-menu [href="#0"]').click(function(event) {
            // On-page links
            if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 90
                    }, 1000);
                }
            }
        });

        jQuery('a.anchor').click(function(event) {
            // On-page links
            if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            }
        });

        // Show Current active button by section during scroll
        $(window).scroll(function(){

            if( jQuery(".main-menu").exists() ) {

                // Get container scroll position
                var fromTop = $(this).scrollTop()+topMenuHeight;
               
                // Get id of current scroll item
                var cur = scrollItems.map(function(){
                    if ($(this).offset().top < fromTop)
                    return this;
                });
                // Get the id of the current element
                cur = cur[cur.length-1];
                var id = cur && cur.length ? cur[0].id : "";

                //console.log(lastId);
               
                if (lastId !== id) {
                    jQuery(".inner-section-link-" + lastId).parent().removeClass("current_page_item");
                    lastId = id;
                    jQuery(".inner-section-link-" + lastId).parent().addClass("current_page_item");
                    // // Set/remove active class
                    // menuItems
                    //     .parent().removeClass("active")
                    //     .end().filter("[href='#"+id+"']").parent().addClass("active");
                }  

                //console.log(cur);

            }

        });

        $.urlParam = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if( results != null ) {
                return results[1] || 0;
            }
        }

        if( $.urlParam('return_message') ) {
            if( jQuery("#sell-ticket-block").exists() ) {
                $('html, body').animate({
                    scrollTop: $("#sell-ticket-block").offset().top - 90
                }, 1000);
            }
        }

        if( $.urlParam('token') ) {
            if( jQuery("#sell-ticket-block").exists() ) {
                $('html, body').animate({
                    scrollTop: $("#sell-ticket-block").offset().top - 90
                }, 1000);
            }
        }

        if( $.urlParam('payfast') ) {
            if( jQuery("#sell-ticket-block").exists() ) {
                $('html, body').animate({
                    scrollTop: $("#sell-ticket-block").offset().top - 90
                }, 1000);
            }
        }

        /*-----------------------------------------------------------------------------------*/
        /* Add to favorites
        /*-----------------------------------------------------------------------------------*/
        $(document).on('click', '.add-to-favorite:not(.fav-app)', function(e){
            e.preventDefault();

            var $listing_id = $(this).data('id');
            var $user_type  = $(this).data('user-type');
            var $user_id    = $(this).data('user-id');
            var $this       = $(this);
            var $block_s    = $(".event-inventory-container").find("[data-favorite-grid='" + $listing_id + "']");
            var $block_grid = $block_s.find(".event-card");

            $.ajax({
                url: royalticketsSettings.royaltickets_ajaxurl,
                type: "POST",
                dataType: 'json',
                context: this,
                data: {
                    'action': 'add_to_favorite',
                    'listing_id': $listing_id,
                    'user_type': $user_type,
                    'user_id': $user_id,
                },
                beforeSend: function(){
                    $this.html('<i class="fa fa fa-spinner fa-spin"></i>');
                    console.log("Before Send");
                },
                success: function (data) {

                    console.log(data);

                    $this.html(data.fav_icon);
                    $(".event-inventory-container").find('.add-to-favorite[data-id=' + $listing_id + ']').html(data.fav_icon);

                    if( data.fav_type == "add") {

                        jQuery("#favorite-event-basket .row").prepend('<div id="favorite-event-' + $listing_id + '" class="col-12 mb-30"></div>');
                        $block_grid.clone().appendTo("#favorite-event-" + $listing_id);
                        //$("#favorite-event-" + $listing_id + " .event-card").not(':first').remove();

                        $('.favorite-panel').addClass('panel-open');
                        $('.favorite-mask').fadeIn(200);
                        $('body').css('overflow', 'hidden');

                    } else {

                        $("#favorite-event-basket #favorite-event-" + $listing_id).fadeOut(200, function(){
                            jQuery("#favorite-event-basket #favorite-event-" + $listing_id).remove();
                        });

                    }

                },
                error: function(data){
                    console.log(data);
                    $this.html('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>');
                }
            });

        });
        // End Add to favorites

        if( jQuery(".page-template-dashboard-add-event").exists() ) {
            //update_schedule_cast_list();
        }

        jQuery(document).on('click', '.update-speakers-list', function(e){
            e.preventDefault();
            var this_speakers_list = jQuery(this).parent().parent();
            update_schedule_cast_list( this_speakers_list );
        });

        function update_schedule_cast_list( this_speakers_list ) {

            this_speakers_list.find('.event-speakers-container').html('');

            var schedule_day_num = this_speakers_list.parent().parent().parent().parent().attr( 'data-day' );
            var schedule_num = this_speakers_list.parent().attr( 'data-schedule' );

            // console.log("Day " + schedule_day_num);
            // console.log("Schedule " + schedule_num);

            var speakers_style = jQuery("#event_cast_style").val();
            var count_cast = 0;

            if(speakers_style == "speaker_style") {
                jQuery('.cast-style-speaker_style .cast-item').each(function(){
                    var cast_name = jQuery(this).find(".cast-name").val();
                    var cast_image = jQuery(this).find(".speaker_photo_holder .image-holder").attr("src");
                    if( cast_name != '' ) {
                        count_cast++;
                        this_speakers_list.find(".event-speakers-container").append('<div class="col-12 col-md-6 col-lg-4"><div class="remember-checkbox"><label><input name="schedule_day[' + schedule_day_num + '][' + schedule_num + '][speakers][' + count_cast + '][checked]" type="checkbox" value="on"><span class="cr"><i class="fa fa-check" aria-hidden="true"></i></span>' + cast_name + '</label><input name="schedule_day[' + schedule_day_num + '][' + schedule_num + '][speakers][' + count_cast + '][name]" type="hidden" value="' + cast_name + '"><input name="schedule_day[' + schedule_day_num + '][' + schedule_num + '][speakers][' + count_cast + '][image]" type="hidden" value="' + cast_image + '"></div></div>')
                    }
                });
            }

            this_speakers_list.find(".update-speakers-list-notification").slideDown("fast", function(){
                this_speakers_list.find(".update-speakers-list-notification").delay(2000).slideUp();
            });

        }

        jQuery(document).on('click', '.add-schedule-new-point', function(e){
            e.preventDefault();
            var current_day = jQuery(this).parent().parent().parent();
            var current_day_num = current_day.data("day");
            if(isNaN(current_day_num)) {
                current_day_num = 1;
            }
            var this_last_schedule = current_day.find(".event-schedule-item:last-child").data("schedule");
            if(isNaN(this_last_schedule)) {
                this_last_schedule = 0;
            }
            this_last_schedule = this_last_schedule+1;
            console.log("Day: " + current_day_num);
            console.log("Schedule: " + this_last_schedule);
            var new_schedule_point = jQuery("#event-schedule-example .event-schedule-item").clone().appendTo(current_day.find(".event-schedules-wrapper"));
            new_schedule_point.attr("data-schedule", this_last_schedule);
            new_schedule_point.find(".schedule_point_num").text(this_last_schedule);
            new_schedule_point.find(".schedule_point_hour").attr('name', 'schedule_day['+current_day_num+']['+this_last_schedule+'][hour]');
            new_schedule_point.find(".schedule_point_title").attr('name', 'schedule_day['+current_day_num+']['+this_last_schedule+'][title]');
            new_schedule_point.find(".schedule_point_desc").attr('name', 'schedule_day['+current_day_num+']['+this_last_schedule+'][description]');
        });

        jQuery(document).on('click', '#add-schedule-new-day', function(e){
            e.preventDefault();
            var this_last_schedule_day_num = jQuery(".schedule-day-list .event-schedule-day:last-child").data("day");
            if(isNaN(this_last_schedule_day_num)) {
                this_last_schedule_day_num = 0;
            }
            this_last_schedule_day_num = this_last_schedule_day_num+1;
            var this_last_schedule = 1;
            //console.log(this_last_schedule_day_num);
            var new_schedule_day = jQuery("#event-schedule-example .event-schedule-day").clone().appendTo(jQuery(".schedule-day-list"));
            new_schedule_day.removeClass("d-none");
            new_schedule_day.attr("data-day", this_last_schedule_day_num);
            new_schedule_day.find(".schedule_day_num").text(this_last_schedule_day_num);
            new_schedule_day.find(".schedule_day_title").attr('name', 'schedule_day['+this_last_schedule_day_num+'][title]');
            new_schedule_day.find(".schedule_day_title").val('');
            new_schedule_day.find(".schedule_point_hour").attr('name', 'schedule_day['+this_last_schedule_day_num+']['+this_last_schedule+'][hour]');
            new_schedule_day.find(".schedule_point_title").attr('name', 'schedule_day['+this_last_schedule_day_num+']['+this_last_schedule+'][title]');
            new_schedule_day.find(".schedule_point_desc").attr('name', 'schedule_day['+this_last_schedule_day_num+']['+this_last_schedule+'][description]');
        });

        jQuery(document).on('click', '.remove_schedule_day', function(e){
            e.preventDefault();
            jQuery(this).parent().parent().parent().parent().parent().remove();
        });

        jQuery(document).on('click', '.remove_schedule_day_point', function(e){
            e.preventDefault();
            jQuery(this).parent().parent().parent().remove();
        });

        jQuery(document).on('change', '#event_add_event_schedule', function() {
            if( this.checked ) {
                jQuery(".schedule-day-list").slideDown();
            } else {
                jQuery(".schedule-day-list").hide();
            }
        });

        jQuery(document).on('change', '#event_add_end_date', function() {
            if( this.checked ) {
                jQuery("#event-end-date-wrapper").show();
            } else {
                jQuery("#event-end-date-wrapper").hide();
            }
        });

        jQuery(document).on('click', '#submit-search-events', function(e){
            e.preventDefault();
            jQuery('form#royaltickets-search-form').submit();
        });

        if( jQuery(".flatpickr").exists() ) {
            jQuery(".flatpickr").flatpickr();
        }

        jQuery(document).on('change', '.privacy_policy_agree', function() {
            if( this.checked ) {
                jQuery("#royaltickets_register_submit").removeClass("disabled");
            } else {
                jQuery("#royaltickets_register_submit").addClass("disabled");
            }
        });

        jQuery(document).on('change', '.privacy_policy_agree_widget', function() {
            if( this.checked ) {
                jQuery("#royaltickets_register_widget_submit").removeClass("disabled");
            } else {
                jQuery("#royaltickets_register_widget_submit").addClass("disabled");
            }
        });

        jQuery(document).on('click', '.view_tickets', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#tickets_section").offset().top - 230
            }, 200);
        });

        jQuery(document).on('click', '.royaltickets-registration', function(e){
            e.preventDefault();
            jQuery("#login").slideUp("fast", function() {
                jQuery("#register").slideDown("fast");
            });
        });

        jQuery(document).on('click', '.royaltickets-back-login', function(e){
            e.preventDefault();
            jQuery("#lost-password").slideUp("fast", function() {
                jQuery("#login").slideDown("fast");
            });
        });

        jQuery(document).on('click', '.royaltickets-lost-password', function(e){
            e.preventDefault();
            jQuery("#login").slideUp("fast", function() {
                jQuery("#lost-password").slideDown("fast");
            });
        });

        jQuery(document).on('click', '.royaltickets-login', function(e){
            e.preventDefault();
            jQuery("#register").slideUp("fast", function() {
                jQuery("#login").slideDown("fast");
            });
        });

        if( jQuery(".average_sales").exists() ) {
            jQuery(".average_sales span").html(jQuery("#this_week_average").val());
        }

        if( jQuery(".total_sales").exists() ) {
            jQuery(".total_sales span").html(jQuery("#this_week_total").val());
        }

        jQuery(document).on('change', '#sales_period', function() {
            var sales_range = jQuery(this).val();
            jQuery(".sales_graph_wrapper").hide();
            jQuery("#"+sales_range+"_wrapper").show();
            jQuery(".total_sales span").html(jQuery("#"+sales_range+"_total").val());
            jQuery(".average_sales span").html(jQuery("#"+sales_range+"_average").val());
        });

        jQuery(document).on('click', '#payout_update', function(e) {
            e.preventDefault();
            jQuery('form#submit-payout-update').submit();
        });

        jQuery(document).on('click', '#request_payout', function(e) {
            e.preventDefault();
            jQuery('form#submit-payout-request').submit();
        });

        if( jQuery(".payment-method-option").exists() ) {
            var status = jQuery('.payment-method-option:checked').val();
            if( status == "wire" ) {
                jQuery("#paypal_transfer").hide();
                jQuery("#skrill_transfer").hide();
                jQuery("#wire_transfer").show();
            }
            if( status == "paypal" ) {
                jQuery("#wire_transfer").hide();
                jQuery("#skrill_transfer").hide();
                jQuery("#paypal_transfer").show();
            }
            if( status == "skrill" ) {
                jQuery("#paypal_transfer").hide();
                jQuery("#wire_transfer").hide();
                jQuery("#skrill_transfer").show();
            }
        }

        jQuery(document).on('change', '.payment-method-option', function() {
            status = jQuery(".payment-method-option:checked").val();
            if( status == "wire" ) {
                jQuery("#paypal_transfer").hide();
                jQuery("#skrill_transfer").hide();
                jQuery("#wire_transfer").show();
            }
            if( status == "paypal" ) {
                jQuery("#wire_transfer").hide();
                jQuery("#skrill_transfer").hide();
                jQuery("#paypal_transfer").show();
            }
            if( status == "skrill" ) {
                jQuery("#paypal_transfer").hide();
                jQuery("#wire_transfer").hide();
                jQuery("#skrill_transfer").show();
            }
        });

        jQuery(document).on('click', '#update-profile', function(e) {
            e.preventDefault();

            jQuery("#password-error").html('');

            var error = 0;
            var password = jQuery("#password").val();
            var new_password = jQuery("#repeat_password").val();

            if( password != '' && new_password != '' ) {
                if( password != new_password ) {
                    error = 1;
                    jQuery("#password-error").html('<div class="alert alert-danger w-100 mb-6" role="alert">'+royalticketsSettings.password_error+'</div>');
                }
            }

            if( error == 0 ){
                jQuery('form#update-profile-form').submit();
            }
            
        });

        // Load Profile Photo
        jQuery(document).on('click', '#delete_profile_image', function(e) {
            e.preventDefault();
            jQuery('.profile-photo img.image-holder').remove();
            jQuery('.profile-photo').html('<img class="image-holder" src="'+royalticketsSettings.avatar+'" width="120" height="120">');
            jQuery('#profile-id').val('');
        });

        function readURLAvatar(input) {
            if (input.files && input.files[0]) {

                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        jQuery('.profile-photo img.image-holder').remove();
                        jQuery('.profile-photo').append('<i class="fa fa-spinner fa-spin"></i><img class="image-holder" src="'+e.target.result+'"/>');
                        jQuery('.profile-photo').addClass('ajax_loading');

                        royaltickets_custom_submit_avatar( input.files[0] );

                    }

                }
                reader.readAsDataURL(input.files[0]);

            }
        }

        jQuery(document).on('change', '#profile_image_upload', function(e) {
            readURLAvatar(this);
        });

        function royaltickets_custom_submit_avatar( image_src ) {

            var fd = new FormData();
            fd.append('image_src', image_src);
            fd.append('function', 'profile_avatar');
            fd.append('user_id', jQuery("#current_user_id").val());
            fd.append('action', 'royaltickets_custom_submit_image_gallery');
            fd.append("file", image_src);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //
                    //console.log("begin upload");
                },
                success: function (data) {
                    //console.log("success")
                    console.log(data);
                    jQuery('#profile-id').val(data.image_id);
                    jQuery('.profile-photo .fa-spinner').remove();
                    jQuery('.profile-photo').removeClass('ajax_loading');
                    jQuery('.profile-photo .image-holder').attr('src', data.image_url);
                },
                error:  function (data) {
                    //console.log("error")
                    //console.log(data);
                },
            });

        };

        // Load ID Photo
        jQuery(document).on('click', '#delete_id_image', function(e) {
            e.preventDefault();
            jQuery('.id-photo-container img.image-holder').remove();
            jQuery('.id-photo-container').html('<img class="image-holder" src="http://placehold.it/200x200" width="200" height="200">');
            jQuery('#profile-doc-id').val('');
        });

        function readURLIDPhoto(input) {
            if (input.files && input.files[0]) {

                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        jQuery('.id-photo-container img.image-holder').remove();
                        jQuery('.id-photo-container').append('<i class="fa fa-spinner fa-spin"></i><img class="image-holder" src="'+e.target.result+'"/>');
                        jQuery('.id-photo-container').addClass('ajax_loading');

                        royaltickets_custom_submit_id_photo( input.files[0] );

                    }

                }
                reader.readAsDataURL(input.files[0]);

            }
        }

        jQuery(document).on('change', '#id_image_upload', function(e) {
            readURLIDPhoto(this);
        });

        function royaltickets_custom_submit_id_photo( image_src ) {

            var fd = new FormData();
            fd.append('image_src', image_src);
            fd.append('function', 'profile_photo_id');
            fd.append('user_id', jQuery("#current_user_id").val());
            fd.append('action', 'royaltickets_custom_submit_image_gallery');
            fd.append("file", image_src);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //
                    //console.log("begin upload");
                },
                success: function (data) {
                    //console.log("success")
                    console.log(data);
                    jQuery('#profile-doc-id').val(data.image_id);
                    jQuery('.id-photo-container .fa-spinner').remove();
                    jQuery('.id-photo-container').removeClass('ajax_loading');
                    jQuery('.id-photo-container .image-holder').attr('src', data.image_url);
                },
                error:  function (data) {
                    //console.log("error")
                    //console.log(data);
                },
            });

        };

        // Load Cover Image
        jQuery(document).on('click', '#delete_cover_image', function(e) {
            e.preventDefault();
            jQuery('.cover-photo-container img.image-holder').remove();
            jQuery('.cover-photo-container').html('<img class="image-holder" src="http://placehold.it/360x200" width="360" height="200">');
            jQuery('#cover-photo-id').val('');
        });

        function readURLCoverPhoto(input) {
            if (input.files && input.files[0]) {

                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        jQuery('.cover-photo-container img.image-holder').remove();
                        jQuery('.cover-photo-container').append('<i class="fa fa-spinner fa-spin"></i><img class="image-holder" src="'+e.target.result+'"/>');
                        jQuery('.cover-photo-container').addClass('ajax_loading');

                        royaltickets_custom_submit_cover_photo( input.files[0] );

                    }

                }
                reader.readAsDataURL(input.files[0]);

            }
        }

        jQuery(document).on('change', '#cover_image_upload', function(e) {
            readURLCoverPhoto(this);
        });

        function royaltickets_custom_submit_cover_photo( image_src ) {

            var fd = new FormData();
            fd.append('image_src', image_src);
            fd.append('function', 'profile_cover_image');
            fd.append('user_id', jQuery("#current_user_id").val());
            fd.append('action', 'royaltickets_custom_submit_image_gallery');
            fd.append("file", image_src);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //
                    //console.log("begin upload");
                },
                success: function (data) {
                    //console.log("success")
                    console.log(data);
                    jQuery('#cover-photo-id').val(data.image_id);
                    jQuery('.cover-photo-container .fa-spinner').remove();
                    jQuery('.cover-photo-container').removeClass('ajax_loading');
                    jQuery('.cover-photo-container .image-holder').attr('src', data.image_url);
                },
                error:  function (data) {
                    //console.log("error")
                    //console.log(data);
                },
            });

        };
        //

        jQuery('.new-ticket-wrapper #ticket-end-sale, .new-ticket-wrapper #ticket-start-sale').datetimepicker({
            icons: {
                time: "fe fe-clock",
                date: "fe fe-calendar",
                up: "fe fe-arrow-up",
                down: "fe fe-arrow-down",
            },
            format: royalticketsSettings.dateformat,
            timeZone: ''
        });

        /* "Edit Ticket" link action */
        jQuery(document).on( 'click', '.ticket-edit-button', function( e ) {

            e.preventDefault();
            var edit_ticket_id = $( this ).attr( 'data-ticket-id' );
            var edit_ticket_type = $( this ).attr( 'data-ticket-type' );
            var edit_ticket_desc = $( this ).attr( 'data-ticket-desc' );
            var edit_ticket_price = $( this ).attr( 'data-ticket-price' );
            var edit_ticket_capacity = $( this ).attr( 'data-ticket-capacity' );
            var edit_ticket_start_sale = $( this ).attr( 'data-start-sale' );
            var edit_ticket_start_sale_formated = $( this ).attr( 'data-start-sale-formated' );
            var edit_ticket_end_sale = $( this ).attr( 'data-end-sale' );
            var edit_ticket_end_sale_formated = $( this ).attr( 'data-end-sale-formated' );
            var edit_ticket_sku = $( this ).attr( 'data-ticket-sku' );

            jQuery('#ticket_id').val(edit_ticket_id);
            jQuery('.new-ticket-wrapper #ticket-type').val(edit_ticket_type);
            jQuery('.new-ticket-wrapper #ticket-desc').val(edit_ticket_desc);
            jQuery('.new-ticket-wrapper #ticket-price').val(edit_ticket_price);
            jQuery('.new-ticket-wrapper #ticket-capacity').val(edit_ticket_capacity);
            
            // Sale start date
            if(edit_ticket_start_sale !== ''){
                var new_date = new Date(edit_ticket_start_sale*1000);
                jQuery('.new-ticket-wrapper #ticket-start-sale').datetimepicker('date', new_date);
                var date = jQuery('.new-ticket-wrapper #ticket-start-sale').datetimepicker('viewDate');
                var date_timestamp = date._d.getTime();
                //console.log(date);
                jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale-timestamp').val(date_timestamp/1000);
            }
            jQuery('.new-ticket-wrapper #ticket-start-sale').on("change.datetimepicker", function (e) {
                var date = jQuery(this).datetimepicker('viewDate');
                var date_timestamp = date._d.getTime();
                //console.log(date);
                jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale-timestamp').val(date_timestamp/1000);
            });

            // Sale end date
            if(edit_ticket_end_sale !== ''){
                var new_date = new Date(edit_ticket_end_sale*1000);
                jQuery('.new-ticket-wrapper #ticket-end-sale').datetimepicker('date', new_date);
                var date = jQuery('.new-ticket-wrapper #ticket-end-sale').datetimepicker('viewDate');
                var date_timestamp = date._d.getTime();
                jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale-timestamp').val(date_timestamp/1000);
            }
            jQuery('.new-ticket-wrapper #ticket-end-sale').on("change.datetimepicker", function (e) {
                var date = jQuery(this).datetimepicker('viewDate');
                var date_timestamp = date._d.getTime();
                jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale-timestamp').val(date_timestamp/1000);
            });

            //jQuery('.new-ticket-wrapper #ticket-start-sale-formated').datepicker( "setDate", new Date(edit_ticket_start_sale*1000) );
            //jQuery('.new-ticket-wrapper #ticket-end-sale').val(edit_ticket_end_sale);
            jQuery('.new-ticket-wrapper #ticket-sku').val(edit_ticket_sku);

            jQuery('.royaltickets-ticket-control-wrap').hide();
            jQuery('.dashboard-events-table').hide();
            jQuery('.new-ticket-wrapper').show();
            jQuery('.new-ticket-wrapper > .row > .col-12 > h5').text(royalticketsSettings.edit_ticket);
            console.log(royalticketsSettings.edit_ticket);

        });

        /* "Cancel Ticket" link action */
        jQuery(document).on( 'click', '.cancel-ticket', function( e ) {

            e.preventDefault();

            jQuery('.royaltickets-ticket-control-wrap').show();
            jQuery('.dashboard-events-table').show();
            jQuery('.new-ticket-wrapper').hide();
            jQuery('.new-ticket-wrapper > .row > .col-12 > h5').text(royalticketsSettings.new_ticket);

            jQuery('.new-ticket-wrapper #ticket-type').val('');
            jQuery('.new-ticket-wrapper #ticket-price').val('');
            jQuery('.new-ticket-wrapper #ticket-capacity').val('');
            jQuery('.new-ticket-wrapper #ticket-start-sale').datetimepicker('clear');
            jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale').val('');
            jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale-timestamp').val('');
            jQuery('.new-ticket-wrapper #ticket-end-sale').datetimepicker('clear');
            jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale').val('');
            jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale-timestamp').val('');
            jQuery('.new-ticket-wrapper #ticket-sku').val('');
            jQuery('#ticket_id').val('');

            //console.log('cancel');

        });

        /* "New Ticket" link action */
        jQuery(document).on( 'click', '#add-new-ticket', function( e ) {

            console.log("new ticket");

            e.preventDefault();

            jQuery('.dashboard-events-table').hide();
            jQuery('.new-ticket-wrapper').show();
            jQuery('.new-ticket-wrapper > .row > .col-12 > h5').text(royalticketsSettings.new_ticket);

            jQuery('.new-ticket-wrapper #ticket-type').val('');
            jQuery('.new-ticket-wrapper #ticket-price').val('');
            jQuery('.new-ticket-wrapper #ticket-capacity').val('');
            jQuery('.new-ticket-wrapper #ticket-start-sale').datetimepicker('clear');
            jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale').val('');
            jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale-timestamp').val('');
            jQuery('.new-ticket-wrapper #ticket-end-sale').datetimepicker('clear');
            jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale').val('');
            jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale-timestamp').val('');
            jQuery('.new-ticket-wrapper #ticket-sku').val('');
            jQuery('#ticket_id').val('');

        });

        jQuery('#save-ticket').on('click', function(e) {

            e.preventDefault();

            var error = 0;

            if(!jQuery('.new-ticket-wrapper #ticket-type').val()) {
                error = 1;
                jQuery('.new-ticket-wrapper #ticket-type').addClass('error')
            }

            if(!jQuery('.new-ticket-wrapper #ticket-price').val()) {
                error = 1;
                jQuery('.new-ticket-wrapper #ticket-price').addClass('error')
            }

            if( error == 0 ) {

                var fd = new FormData();
                fd.append('ticket-type', jQuery('.new-ticket-wrapper #ticket-type').val());
                fd.append('ticket-desc', jQuery('.new-ticket-wrapper #ticket-desc').val());
                fd.append('ticket-price', jQuery('.new-ticket-wrapper #ticket-price').val());
                fd.append('ticket-capacity', jQuery('.new-ticket-wrapper #ticket-capacity').val());
                fd.append('ticket-start-sale', jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale-timestamp').val());
                fd.append('ticket-start-sale-formated', jQuery('.new-ticket-wrapper #ticket-start-sale .ticket-start-sale').val());
                fd.append('ticket-end-sale', jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale-timestamp').val());
                fd.append('ticket-end-sale-formated', jQuery('.new-ticket-wrapper #ticket-end-sale .ticket-end-sale').val());
                fd.append('ticket-sku', jQuery('.new-ticket-wrapper #ticket-sku').val());
                fd.append('ticket-id', jQuery('.new-ticket-wrapper #ticket_id').val());
                fd.append('ticket-parent-id', jQuery('.new-ticket-wrapper #parent_ticket_id').val());
                fd.append('ticket-event-id', jQuery('.new-ticket-wrapper #event_id').val());
                fd.append('ticket-event-time', jQuery('.new-ticket-wrapper #event_time').val());
                fd.append('action', 'ajax_submit_ticket_type');

                $.ajax({
                    type: 'POST',
                    url: royalticketsSettings.royaltickets_ajaxurl,
                    dataType: 'json',
                    data: fd,
                    contentType: false,
                    processData: false,
                    beforeSend: function(){
                        //console.log("begin upload");
                        jQuery('.dashboard-events-table .loading').show();
                        jQuery('.dashboard-events-table').show();
                        jQuery('.new-ticket-wrapper').hide();
                    },
                    success: function (data) {
                        //console.log(data);
                        updateTicketsTypeList( jQuery('.new-ticket-wrapper #parent_ticket_id').val() );
                        jQuery('.new-ticket-wrapper').hide();
                        jQuery('.new-ticket-wrapper #ticket-type').val('');
                        jQuery('.new-ticket-wrapper #ticket-desc').val('');
                        jQuery('.new-ticket-wrapper #ticket-price').val('');
                        jQuery('.new-ticket-wrapper #ticket-capacity').val('');
                        jQuery('.new-ticket-wrapper #ticket-start-sale').val('');
                        jQuery('.new-ticket-wrapper #ticket-end-sale').val('');
                        jQuery('.new-ticket-wrapper #ticket-sku').val('');
                        console.log("success")
                        //updateTicketsTypeList( jQuery('#edit-ticket-type #parent_ticket_id').val() );
                    },
                    error:  function (data) {
                        console.log("error")
                        //console.log(data);
                    },

                });
            }

        });

        /* "Delete Ticket" link action */
        jQuery(document).on( 'click', '.delete-ticket', function( e ) {
            if ( ! confirm( royalticketsSettings.confirm_alert ) ) {
                return false;
            }
            e.preventDefault();

            var deleted_ticket_id = $( this ).attr( 'data-id' );

            var fd = new FormData();
            fd.append('ticket-id', deleted_ticket_id);
            fd.append('action', 'ajax_delete_ticket_type');

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //console.log("begin upload");
                    jQuery('.dashboard-events-table .loading').show();
                },
                success: function (data) {
                    //console.log(data);
                    console.log("success")
                    updateTicketsTypeList( jQuery('.new-ticket-wrapper #parent_ticket_id').val() );
                },
                error:  function (data) {
                    console.log("error")
                    //console.log(data);
                },

            });

        });

        function updateTicketsTypeList( ticket_id ) {

            var fd = new FormData();
            fd.append('ticket-id', ticket_id);
            fd.append('action', 'ajax_update_ticket_type_list_front');

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //console.log("begin upload");
                    jQuery('.dashboard-events-table .loading').show();
                },
                success: function (data) {
                    //console.log(data['html']);
                    console.log("success")
                    jQuery(".dashboard-events-table .body").html(data['html']);
                    jQuery('.dashboard-events-table .loading').hide();
                },
                error:  function (data) {
                    console.log("error")
                    //console.log(data);
                },

            });

        }

        if( jQuery("#event_time").exists() ) {
            jQuery("#event_time").val(jQuery(".ticket-date").val());
        }

        jQuery(document).on('change', '.ticket-date', function() {
            jQuery("#event_time").val(jQuery(".ticket-date").val());
        });

        if( jQuery("#parent_ticket_id").exists() ) {
            jQuery("#parent_ticket_id").val(jQuery("#post_id").val());
        }

        if( jQuery("#ticket-event").exists() ) {
            var event_selected = jQuery('#ticket-event').find(':selected').val();
            //console.log(event_selected);
            jQuery("#royaltickets-event-dates-"+event_selected).show();
            jQuery("#royaltickets-event-dates-"+event_selected+" select.ticket-date").attr('name', 'ticket-date');
            jQuery(".new-ticket-wrapper #event_id").val(event_selected);
            
            jQuery(document).on('change', '#ticket-event', function() {
                event_selected = jQuery(this).val();
                //console.log(event_selected);
                jQuery(".royaltickets-event-dates select.ticket-date").attr('name', '');
                jQuery(".royaltickets-event-dates").hide();
                jQuery("#royaltickets-event-dates-"+event_selected).show();
                jQuery("#royaltickets-event-dates-"+event_selected+" select.ticket-date").attr('name', 'ticket-date');
                jQuery("#royaltickets-event-dates-"+event_selected+" select.ticket-date").val(jQuery("#royaltickets-event-dates-"+event_selected+" select.ticket-date option:first").val());
                jQuery(".new-ticket-wrapper #event_id").val(event_selected);
            });
        }

        $(function() {
            if( jQuery(".date-time-picker").exists() ) {
                jQuery('.date-time-picker').each(function(){
                    var default_date = new Date().getTime();
                    var date_timestamp = default_date;
                    //console.log(default_date);
                    if( jQuery(this).find('.datetimepicker-input-timestamp').attr('data-date') != 0 ) {
                        default_date = parseInt(jQuery(this).find('.datetimepicker-input-timestamp').attr('data-date')*1000);
                        console.log(default_date);
                        date_timestamp = default_date;
                        //console.log(default_date);
                    }
                    jQuery(this).find('.datetimepicker-input').val('');
                    jQuery(this).datetimepicker({
                        icons: {
                            time: "fe fe-clock",
                            date: "fe fe-calendar",
                            up: "fe fe-arrow-up",
                            down: "fe fe-arrow-down",
                        },
                        format: royalticketsSettings.dateformat,
                        defaultDate: new Date(default_date),
                        timeZone: 'GMT',
                    });
                    //console.log(default_date);
                    jQuery(this).parent().find('.datetimepicker-input-timestamp').val(date_timestamp/1000);
                    jQuery(this).on("change.datetimepicker", function (e) {
                        var date = jQuery(this).datetimepicker('viewDate');
                        date_timestamp = date._d.getTime();
                        jQuery(this).parent().find('.datetimepicker-input-timestamp').val(date_timestamp/1000);
                        jQuery(this).parent().find('.datetimepicker-input-timestamp').attr('data-date', date_timestamp/1000);
                        console.log(date._d);
                        console.log(date_timestamp);
                    });
                });
            }
        });

        // Event Dates
        jQuery(document).on('click', '.remove-event-date', function(e) {
            e.preventDefault();
            jQuery(this).parent().parent().remove();
        });

        $(document).on('click','#add-more-date',function(e){
            e.preventDefault();
            var dates_lenght = 0;
            var date_timestamp;
            if( jQuery(".event-dates-list > .form-group").exists() ) {
                var dates_lenght = $('.event-dates-list > .form-group:last-of-type').attr('data-id');
            }
            dates_lenght = parseInt(dates_lenght) + 1;
            $('.event-dates-list').append('<div class="form-group d-flex" data-id="' + dates_lenght + '"><div class="input-group date date-time-picker" id="datetimepicker' + dates_lenght + '" data-target-input="nearest"><input type="text" class="form-control datetimepicker-input" name="dates[' + dates_lenght + '][event_date][formatted]" data-date="" value="" data-target="#datetimepicker' + dates_lenght + '" data-toggle="datetimepicker"/><input type="hidden" class="form-control datetimepicker-input-timestamp" name="dates[' + dates_lenght + '][event_date][timestamp]" data-date="" value="" data-target="#datetimepicker' + dates_lenght + '"/><div class="input-group-append" data-target="#datetimepicker' + dates_lenght + '" data-toggle="datetimepicker"><div class="input-group-text"><i class="fe fe-calendar"></i></div></div></div><div class="input-remove-item d-inline-flex"><a href="#" class="remove-event-date pl-6 py-2 text-danger"><i class="fe fe-trash-2"></i></a></div></div>');
            jQuery('.date-time-picker').each(function(){
                var default_date = new Date().getTime();
                if( jQuery(this).find('.datetimepicker-input').attr('data-date') != 0 ) {
                    default_date = new Date(jQuery(this).find('.datetimepicker-input').attr('data-date')*1000);
                }
                jQuery(this).datetimepicker({
                    icons: {
                        time: "fe fe-clock",
                        date: "fe fe-calendar",
                        up: "fe fe-arrow-up",
                        down: "fe fe-arrow-down",
                    },
                    format: royalticketsSettings.dateformat,
                    defaultDate: default_date,
                    timeZone: '',
                });
                var date = jQuery(this).datetimepicker('viewDate');
                date_timestamp = date._d.getTime();
                //console.log(date_timestamp);
                jQuery(this).parent().find('.datetimepicker-input-timestamp').val(date_timestamp/1000);
                jQuery(this).parent().find('.datetimepicker-input-timestamp').attr('data-date', date_timestamp/1000);
                jQuery(this).on("change.datetimepicker", function (e) {
                    var date = jQuery(this).datetimepicker('viewDate');
                    date_timestamp = date._d.getTime();
                    //console.log(date_timestamp);
                    jQuery(this).parent().find('.datetimepicker-input-timestamp').val(date_timestamp/1000);
                    jQuery(this).parent().find('.datetimepicker-input-timestamp').attr('data-date', date_timestamp/1000);
                });
            });
        });

        jQuery(document).on('click', '.add-new-location', function(e) {
            e.preventDefault();
            jQuery(".new-location-wrapper").show();
            jQuery(".select-location-wrapper").hide();
        });

        jQuery(document).on('click', '.cancel-new-location', function(e) {
            e.preventDefault();
            jQuery(".new-location-wrapper").hide();
            jQuery(".select-location-wrapper").show();
        });

        jQuery('.save-new-location:not(.disabled)').on('click', function(e) {

            e.preventDefault();

            jQuery('#event_location_name').removeClass('error');
            jQuery('#event_place_address').removeClass('error');

            var error = 0;

            if(!jQuery('#event_location_name').val()) {
                error = 1;
                jQuery('#event_location_name').addClass('error');
            }

            if(!jQuery('#event_location_city').val()) {
                error = 1;
                jQuery('#event_location_city').addClass('error');
            }

            if(!jQuery('#event_place_address').val()) {
                error = 1;
                jQuery('#event_place_address').addClass('error');
            }

            if( error == 0 ) {

                var fd = new FormData();
                fd.append('event-place-name', jQuery('#event_location_name').val());
                fd.append('event-place-city', jQuery('#event_location_city').val());
                fd.append('event-place-address', jQuery('#event_place_address').val());
                fd.append('event-place-latitude', jQuery('#event_place_latitude').val());
                fd.append('event-place-longitude', jQuery('#event_place_longitude').val());
                fd.append('action', 'ajax_submit_new_event_place');

                $.ajax({
                    type: 'POST',
                    url: royalticketsSettings.royaltickets_ajaxurl,
                    dataType: 'json',
                    data: fd,
                    contentType: false,
                    processData: false,
                    beforeSend: function(){
                        //console.log("begin upload");
                        jQuery('.save-new-location').addClass("disabled");
                    },
                    success: function (data) {
                        //console.log(data);
                        jQuery('.save-new-location').removeClass("disabled");
                        jQuery(".new-location-wrapper").hide();
                        jQuery(".select-location-wrapper").show();
                        if( data.place_list !== '' ) {
                            jQuery("#event_place").html(data.place_list);
                            jQuery('#event_place').val(data.place_id);
                            jQuery('#event_place').trigger("chosen:updated");
                        }
                    },
                    error:  function (data) {
                        console.log("error")
                        //console.log(data);
                    },

                });
            } else {
                $('html, body').animate({
                    scrollTop: $("#event_location_name").offset().top - 230
                }, 200);
            }

        });

        // Location map
        if( jQuery("#event-place-map").exists() ) {

            var geocoder;
            var map;
            var marker;

            var geocoder = new google.maps.Geocoder();

            function geocodePosition(pos) {
                geocoder.geocode({
                    latLng: pos
                }, function(responses) {
                    if (responses && responses.length > 0) {
                      updateMarkerAddress(responses[0].formatted_address);
                    } else {
                      updateMarkerAddress('Cannot determine address at this location.');
                    }
                });
            }

            function updateMarkerPosition(latLng) {
                jQuery('#event_place_latitude').val(latLng.lat());
                jQuery('#event_place_longitude').val(latLng.lng());
            }

            function updateMarkerAddress(str) {
                jQuery('#event_place_address').val(str);
            }

            function initialize() {

                var latlng = new google.maps.LatLng(jQuery("#event_place_latitude").val(), jQuery("#event_place_longitude").val());
                var mapOptions = {
                    zoom: 16,
                    center: latlng
                }

                map = new google.maps.Map(document.getElementById('event-place-map'), mapOptions);

                geocoder = new google.maps.Geocoder();

                marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    draggable: true
                });

                // Add dragging event listeners.
                google.maps.event.addListener(marker, 'dragstart', function() {
                    updateMarkerAddress('Dragging...');
                });
              
                google.maps.event.addListener(marker, 'drag', function() {
                    updateMarkerPosition(marker.getPosition());
                });
              
                google.maps.event.addListener(marker, 'dragend', function() {
                    geocodePosition(marker.getPosition());
                });

            }

            google.maps.event.addDomListener(window, 'load', initialize);
                     
            initialize();
                      
            jQuery(function() {
                
                jQuery("#event_place_address").autocomplete({
                    //This bit uses the geocoder to fetch address values
                    source: function(request, response) {
                        geocoder.geocode( {'address': request.term }, function(results, status) {
                            response(jQuery.map(results, function(item) {
                                return {
                                    label:  item.formatted_address,
                                    value: item.formatted_address,
                                    latitude: item.geometry.location.lat(),
                                    longitude: item.geometry.location.lng()
                                }
                            }));
                        })
                    },
                    //This bit is executed upon selection of an address
                    select: function(event, ui) {
                        jQuery("#event_place_latitude").val(ui.item.latitude);
                        jQuery("#event_place_longitude").val(ui.item.longitude);

                        var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);

                        marker.setPosition(location);
                        map.setZoom(16);
                        map.setCenter(location);

                    }
                });
            });
              
            //Add listener to marker for reverse geocoding
            google.maps.event.addListener(marker, 'drag', function() {
                geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            jQuery('#event_place_address').val(results[0].formatted_address);
                            jQuery('#event_place_latitude').val(marker.getPosition().lat());
                            jQuery('#event_place_longitude').val(marker.getPosition().lng());
                        }
                    }
                });
            });
            
        };

        if( jQuery(".event_gallery_holder").exists() ) {

            jQuery('.event_gallery_holder').sortable({
                placeholder: "col-12 col-sm-6 col-md-4 mb-6 image-gallery rounded image-gallery-placeholder"
            });
            jQuery('.event_gallery_holder').disableSelection();

        };

        // Add Event Video Cover Image
        jQuery(document).on('click', '#event_video_with_cover_image', function(e) {
            e.preventDefault();
            jQuery('.event_video_cover_holder img').remove();
            jQuery("#event_video_no_cover_image").attr("style", "display: inline-block!important");
            jQuery("#event_video_with_cover_image").attr("style", "display: none!important");
            jQuery('.event_video_cover').val('');
        });

        // Load Video Cover Image
        function readURLVideoEventCover(input) {
            if (input.files && input.files[0]) {

                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        jQuery('.event_video_cover_holder').html('<i class="fa fa-spinner fa-spin"></i><img class="image-holder" src="'+e.target.result+'"/>');
                        jQuery('.event_video_cover_holder').addClass('ajax_loading');

                        royaltickets_custom_submit_video_event_cover( input.files[0] );

                    }

                }
                reader.readAsDataURL(input.files[0]);

            }
        }
        $("#event-video-cover-image-upload").change(function(){
            readURLVideoEventCover(this);
        });

        function royaltickets_custom_submit_video_event_cover( image_src ) {

            var fd = new FormData();
            fd.append('image_src', image_src);
            fd.append('action', 'royaltickets_custom_submit_image_gallery');
            fd.append("file", image_src);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //
                    //console.log("begin upload");
                    document.getElementById("event-video-cover-image-upload").value = "";
                    jQuery('.event_video_cover_holder').addClass('ajax_loading');
                    jQuery('.event_video_cover_holder').removeClass('ajax_loaded');
                    jQuery('#event_video_no_cover_image').attr("style", "display: none!important");
                },
                success: function (data) {
                    //console.log("success")
                    jQuery('.event_video_cover_holder').removeClass('ajax_loading');
                    jQuery('.event_video_cover_holder').addClass('ajax_loaded');
                    //console.log(data.image_url);
                    jQuery('.event_video_cover').val(data.image_id);
                    jQuery('#event_video_with_cover_image').attr("style", "display: inline-block!important");
                    jQuery('.event_video_cover_holder .image-holder').attr('src', data.image_url);
                },
                error:  function (data) {
                    //console.log("error")
                    //console.log(data);
                },
            });

        };

        // Change cats style
        jQuery(document).on('change', '#event_cast_style', function() {
            var event_cast_style = jQuery(this).val();
            console.log(event_cast_style);
            if( event_cast_style == 'speaker_style' ) {
                jQuery('.cast-style-simple').attr("style", "display: none !important");
                jQuery('.cast-style-speaker_style').attr("style", "display: inline-block !important");
            } else {
                jQuery('.cast-style-speaker_style').attr("style", "display: none !important");
                jQuery('.cast-style-simple').attr("style", "display: inline-block !important");
            }
        });

        // Add Event Speaker Photo
        jQuery(document).on('click', '.remove_speaker_photo', function(e) {
            e.preventDefault();
            jQuery(this).parent().find('.speaker_photo_holder img').remove();
            jQuery(this).parent().find(".add-speaker-photo-btn").attr("style", "display: inline-block!important");
            jQuery(this).attr("style", "display: none!important");
            jQuery(this).parent().find('.speaker_photo').val('');
        });

        // Load Video Cover Image
        function readURLSpeakerEventCover(input) {

            if (input.files && input.files[0]) {

                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        jQuery(input).parent().parent().find('.speaker_photo_holder').html('<i class="fa fa-spinner fa-spin"></i><img class="image-holder" src="'+e.target.result+'"/>');
                        jQuery(input).parent().parent().find('.speaker_photo_holder').addClass('ajax_loading');

                        royaltickets_custom_submit_speaker_photo( input.files[0], input );

                    }

                }
                reader.readAsDataURL(input.files[0]);

            }

        }
        jQuery(document).on('change', '.add-speaker-photo', function() {
            readURLSpeakerEventCover(this);
        });

        function royaltickets_custom_submit_speaker_photo( image_src, instance ) {

            var fd = new FormData();
            fd.append('image_src', image_src);
            fd.append('action', 'royaltickets_custom_submit_image_gallery');
            fd.append("file", image_src);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //
                    console.log("begin upload");
                    jQuery(instance).parent().parent().find('.speaker_photo').value = "";
                    jQuery(instance).parent().parent().find('.speaker_photo_holder').addClass('ajax_loading');
                    jQuery(instance).parent().parent().find('.speaker_photo_holder').removeClass('ajax_loaded');
                    jQuery(instance).parent().parent().find('.add-speaker-photo-btn').attr("style", "display: none!important");
                },
                success: function (data) {
                    console.log("success")
                    jQuery(instance).parent().parent().find('.speaker_photo_holder').removeClass('ajax_loading');
                    jQuery(instance).parent().parent().find('.speaker_photo_holder').addClass('ajax_loaded');
                    console.log(data.image_url);
                    jQuery(instance).parent().parent().find('.speaker_photo').val(data.image_url);
                    jQuery(instance).parent().parent().find('.remove_speaker_photo').attr("style", "display: inline-block!important");
                    jQuery(instance).parent().parent().find('.speaker_photo_holder .image-holder').attr('src', data.image_url);
                },
                error:  function (data) {
                    //console.log("error")
                    //console.log(data);
                },
            });

        };

        // Load Event Cover Image
        jQuery(document).on('click', '#event_with_cover_image', function(e) {
            e.preventDefault();
            jQuery('.event_cover_holder img').remove();
            jQuery("#event_no_cover_image").attr("style", "display: inline-block!important");
            jQuery("#event_with_cover_image").attr("style", "display: none!important");
            jQuery('.event_cover').val('');
        });

        function readURLEventCover(input) {
            if (input.files && input.files[0]) {

                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        jQuery('.event_cover_holder').html('<i class="fa fa-spinner fa-spin"></i><img class="image-holder" src="'+e.target.result+'"/>');
                        jQuery('.event_cover_holder').addClass('ajax_loading');

                        royaltickets_custom_submit_event_cover( input.files[0] );

                    }

                }
                reader.readAsDataURL(input.files[0]);

            }
        }
        $("#event-cover-image-upload").change(function(){
            readURLEventCover(this);
        });

        function royaltickets_custom_submit_event_cover( image_src ) {

            var fd = new FormData();
            fd.append('image_src', image_src);
            fd.append('action', 'royaltickets_custom_submit_image_gallery');
            fd.append("file", image_src);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //
                    //console.log("begin upload");
                    document.getElementById("event-cover-image-upload").value = "";
                    jQuery('.event_cover_holder').addClass('ajax_loading');
                    jQuery('.event_cover_holder').removeClass('ajax_loaded');
                    jQuery('#event_no_cover_image').attr("style", "display: none!important");
                },
                success: function (data) {
                    //console.log("success")
                    jQuery('.event_cover_holder').removeClass('ajax_loading');
                    jQuery('.event_cover_holder').addClass('ajax_loaded');
                    //console.log(data.image_url);
                    jQuery('.event_cover').val(data.image_id);
                    jQuery('#event_with_cover_image').attr("style", "display: inline-block!important");
                    jQuery('.event_cover_holder .image-holder').attr('src', data.image_url);
                },
                error:  function (data) {
                    //console.log("error")
                    //console.log(data);
                },
            });

        };

        // Load Image Gallery
        jQuery(document).on('click', '.remove-image-gallery', function(e) {
            e.preventDefault();
            jQuery(this).parent().parent().remove();
        });

        function readURLEventImages(input) {
            if (input.files && input.files[0]) {

                jQuery(input.files).each(function () {

                    var file = $(this);

                    var reader = new FileReader();
                    reader.onload = function (e) {

                        var image = new Image();
                        image.src = e.target.result;

                        image.onload = function() {

                            if( jQuery(".event_gallery_holder .image-gallery").exists() ) {
                                var id = $( ".event_gallery_holder .image-gallery" ).last().data('id');
                            } else {
                                var id = 1;
                            }
                            id++;

                            var idGen = generate_ID();

                            jQuery(".event_gallery_holder").append('<div class="col-12 col-sm-6 col-md-4 mb-6 image-gallery ajax_loading" id="gallery-image-' + idGen + '" data-id="' + id + '"><div class="image-gallery-item position-relative rounded" style="background-image: url('+image.src+');"><a href="#" class="btn btn-xs btn-danger remove-image-gallery right-0 position-absolute mr-1 mt-1 rounded"><i class="fe fe-trash-2"></i></a><i class="fa fa-spinner fa-spin"></i><input type="hidden" class="event_image_id" name="event_images[]" value="" /></div></div>');

                            royaltickets_custom_submit_event_gallery( file[0], idGen );

                        }

                    }
                    reader.readAsDataURL(file[0]);

                });

            }
        }
        $("#event-images-upload").change(function(){
            readURLEventImages(this);
        });

        function royaltickets_custom_submit_event_gallery( image_src, idGen ) {

            var fd = new FormData();
            fd.append('image_src', image_src);
            fd.append('action', 'royaltickets_custom_submit_image_gallery');
            fd.append("file", image_src);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //
                    //console.log("begin upload");
                },
                success: function (data) {
                    //console.log("success")
                    jQuery('#gallery-image-' + idGen).removeClass('ajax_loading');
                    jQuery('#gallery-image-' + idGen).addClass('ajax_loaded');
                    //console.log(data.image_url);
                    jQuery('#gallery-image-' + idGen + ' .event_image_id').val(data.image_id);
                    jQuery('#gallery-image-' + idGen + ' .event_image_url').val(data.image_url);
                },
                error:  function (data) {
                    //console.log("error")
                    //console.log(data);
                },
            });

        };

        $(document).on('click','#submit-royaltickets-event a#submit-post',function(e){
            e.preventDefault();
            jQuery("#post_name").removeClass('error');
            if( jQuery("#post_name").val() != '' ) {
                $('form#submit-royaltickets-event ').submit();
            } else {
                jQuery("#post_name").addClass('error');
                $('html, body').animate({
                    scrollTop: $("#post_name").offset().top - 200
                }, 200);
            }
        });

        $(document).on('click','#submit-royaltickets-event a#add-more-cast',function(e){
            e.preventDefault();
            var cast_lenght = $('.cast-holder > .cast-item:last-of-type').attr('data-id');
            cast_lenght = parseInt(cast_lenght) + 1;
            $('.cast-holder').append('<div class="row cast-item" data-id="'+cast_lenght+'"><div class="col-12 col-md-5"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.cast_label+'</label><input type="text" class="form-control mb-0" name="event_cast_item['+cast_lenght+'][cast_label]" value=""></div></div><div class="col-12 col-md-6"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.cast_name+'</label><input type="text" class="form-control mb-0" name="event_cast_item['+cast_lenght+'][cast_name]" value=""></div></div><div class="col-12 col-md-1 text-right pt-8"><a href="#" class="remove_cast_item py-2 text-danger"><i class="fe fe-trash-2"></i></a></div></div>');
        });

        $(document).on('click','#submit-royaltickets-event a#add-more-cast-3',function(e){
            e.preventDefault();
            if(jQuery("#event_cast_style").val() == "speaker_style") {
                var cast_lenght = $('.cast-holder.cast-style-speaker_style > .cast-item:last-of-type').attr('data-id');
                cast_lenght = parseInt(cast_lenght) + 1;
                $('.cast-holder.cast-style-speaker_style').append('<div class="row cast-item" data-id="'+cast_lenght+'"><div class="col-12 col-md-11"><div class="row"><div class="col-12 col-md-6"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.cast_name+'</label><input type="text" class="form-control mb-0" name="event_cast_3_item['+cast_lenght+'][cast_name]" value=""></div><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold w-100">'+royalticketsSettings.cast_photo+'</label><div class="speaker_photo_holder"></div><div href="#" class="btn btn-sm btn-primary rounded lift text-uppercase fw-500 position-relative add-speaker-photo-btn">'+royalticketsSettings.upload_photo+'<input type="file" multiple="" data-file_types="jpg|jpeg|gif|png" class="add-speaker-photo" name="event-speaker-image-upload" ></div><a href="#" class="btn btn-sm btn-danger rounded lift text-uppercase fw-500 d-none remove_speaker_photo">'+royalticketsSettings.remove_photo+'</a><input type="hidden" class="speaker_photo" name="event_cast_3_item['+cast_lenght+'][cast_photo]" value="" /></div></div><div class="col-12 col-md-6"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.cast_position+'</label><input type="text" class="form-control mb-0" name="event_cast_3_item['+cast_lenght+'][cast_position]" value=""></div><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.cast_facebook_url+'</label><input type="text" class="form-control mb-0" name="event_cast_3_item['+cast_lenght+'][cast_facebook]" value=""></div><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.cast_linkedin_url+'</label><input type="text" class="form-control mb-0" name="event_cast_3_item['+cast_lenght+'][cast_linkedin]" value=""></div><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.cast_twitter_url+'</label><input type="text" class="form-control mb-0" name="event_cast_3_item['+cast_lenght+'][cast_twitter]" value=""></div></div><div class="col-12 mb-4"><div class="border-bottom"></div></div></div></div><div class="col-12 col-md-1 text-right pt-8"><a href="#" class="remove_cast_item py-2 text-danger"><i class="fe fe-trash-2"></i></a></div></div>');
            } else {
                var cast_lenght = $('.cast-holder.cast-style-simple > .cast-item:last-of-type').attr('data-id');
                cast_lenght = parseInt(cast_lenght) + 1;
                $('.cast-holder.cast-style-simple').append('<div class="row cast-item" data-id="'+cast_lenght+'"><div class="col-12 col-md-11"><div class="row"><div class="col-12 col-md-6"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">Label</label><input type="text" class="form-control mb-0" name="event_cast_item['+cast_lenght+'][cast_label]" value=""></div></div><div class="col-12 col-md-6"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">Name</label><input type="text" class="cast-name form-control mb-0" name="event_cast_item['+cast_lenght+'][cast_name]" value=""></div></div></div></div><div class="col-12 col-md-1 text-right pt-8"><a href="#" class="remove_cast_item py-2 text-danger"><i class="fe fe-trash-2"></i></a></div></div>');
            }
        });

        $(document).on('click','#submit-royaltickets-event a#add-more-faq',function(e){
            e.preventDefault();
            var faq_lenght = $('.faq-holder > .faq-item:last-of-type').attr('data-id');
            faq_lenght = parseInt(faq_lenght) + 1;
            $('.faq-holder').append('<div class="row faq-item" data-id="'+faq_lenght+'"><div class="col-12 col-md-11"><div class="row"><div class="col-12"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.faq_question+'</label><input type="text" class="form-control mb-0" name="event_faq_item['+faq_lenght+'][faq_question]" value=""></div></div><div class="col-12"><div class="position-relative mb-5"><label class="form-label text-uppercase font-weight-bold">'+royalticketsSettings.faq_answer+'</label><textarea cols="20" rows="4" class="form-control" name="event_faq_item['+faq_lenght+'][faq_answer]" ></textarea></div></div></div></div><div class="col-12 col-md-1 text-right pt-8"><a href="#" class="remove_faq_item py-2 text-danger"><i class="fe fe-trash-2"></i></a></div></div>');
        });

        $(document).on('click','.remove_cast_item, .remove_faq_item',function(e){
            e.preventDefault();
            jQuery(this).parent().parent().remove();
        });

        $(document).on('click','#navside-accordion li a',function(e){
            jQuery(this).parent().addClass('in-progress');
            jQuery("#navside-accordion li:not(.in-progress)").removeClass('active-submenu');
            if(jQuery(this).hasClass('dropdown-toggle')) {
                e.preventDefault();
                if(jQuery(this).parent().hasClass('active-submenu')) {
                    jQuery(this).parent().removeClass('active-submenu');
                } else {
                    jQuery(this).parent().addClass('active-submenu');
                }
            }
            jQuery(this).parent().removeClass('in-progress');
        });

        var ticket_desc = jQuery('#ticket-type').find(':selected').attr('data-desc');
        if(ticket_desc) {
            jQuery('.ticket-desc').html('<i class="fe fe-info opacity_60 mr-2 fs-80 d-inline-block"></i>' + ticket_desc);
            jQuery('.ticket-desc').attr("style", "display: inline-block !important");
        } else {
            jQuery('.ticket-desc').text('');
            jQuery('.ticket-desc').attr("style", "display: none !important");
        }

        $(document).on('click','#place-order:not(.disabled)',function(e){
            e.preventDefault();
            var payment_gateway = $('input[name=payment]:checked').val();
            console.log(payment_gateway);
            if( payment_gateway === 'Stripe' ) {
                jQuery("#place-order").addClass("disabled");
                update_ticket_cart_total("stripe");
                // jQuery('.stripe-button-el').trigger("click");
            } else if( payment_gateway === 'PayPal' ) {
                jQuery("#place-order").addClass("disabled");
                update_ticket_cart_total("paypal");
            } else if( payment_gateway === 'PayFast' ) {
                jQuery("#place-order").addClass("disabled");
                update_ticket_cart_total("payfast");
            }
        });

        jQuery(document).on('change', '#ticket-type', function() {
            console.log("ceva");
            update_ticket_cart_total_submit_ajax();

            jQuery("#ticketID").val(jQuery(this).val());
            jQuery("#paypal_ticketID").val(jQuery(this).val());

            var ticket_desc = jQuery(this).find(':selected').attr('data-desc');
            if(ticket_desc) {
                jQuery('.ticket-desc').html('<i class="fe fe-info opacity_60 mr-2 fs-80 d-inline-block"></i>' + ticket_desc);
                jQuery('.ticket-desc').attr("style", "display: inline-block !important");
            } else {
                jQuery('.ticket-desc').text('');
                jQuery('.ticket-desc').attr("style", "display: none !important");
            }
        });

        $('.royaltickets-qty .count').prop('disabled', true);
        $(document).on('click','.plus',function(){
            var this_count = $(this).parent();
            this_count.find('.count').val(parseInt(this_count.find('.count').val()) + 1 );

            var this_ticket_id = $(this).parent().attr('data-id');
            var this_ticket_amount = this_count.find('.count').val();
            var this_ticket_price = jQuery("#ticket-item-"+this_ticket_id).attr('data-price');
            var this_ticket_total = this_ticket_price * this_ticket_amount;

            update_ticket_cart_total_submit_ajax();
        });

        $(document).on('click','.minus',function(){
            var this_count = $(this).parent();
            this_count.find('.count').val(parseInt(this_count.find('.count').val()) - 1 );
            if (this_count.find('.count').val() == 0) {
                this_count.find('.count').val(1);
            }

            var this_ticket_id = $(this).parent().attr('data-id');
            var this_ticket_amount = this_count.find('.count').val();
            var this_ticket_price = jQuery("#ticket-item-"+this_ticket_id).attr('data-price');
            var this_ticket_total = this_ticket_price * this_ticket_amount;

            update_ticket_cart_total_submit_ajax();
        });

        jQuery('#ticket-name').keypress(function() {
            jQuery("#place-order").removeClass("disabled");
            jQuery("#ticket-name").removeClass("error");
            jQuery(this).focus();
        });

        jQuery('#ticket-email').keypress(function() {
            jQuery("#place-order").removeClass("disabled");
            jQuery("#ticket-email").removeClass("error");
            jQuery(this).focus();
        });

        jQuery('#ticket-phone').keypress(function() {
            jQuery("#place-order").removeClass("disabled");
            jQuery("#ticket-phone").removeClass("error");
            jQuery(this).focus();
        });

        function update_ticket_cart_total( gateway ) {

            //console.log(parent_ticket_ID);

            var errors = 0;

            if( jQuery("#ticket-name").exists() || jQuery("#ticket-email").exists() || jQuery("#ticket-phone").exists() ) {

                var name = jQuery("#ticket-name").val();
                var email = jQuery("#ticket-email").val();
                var phone = jQuery("#ticket-phone").val();

                if ( name.length === 0 ) {
                    errors = 1;
                    jQuery("#ticket-name").addClass("error");
                }

                if ( email.length === 0 ) {
                    errors = 1;
                    jQuery("#ticket-email").addClass("error");
                }

                if ( phone.length === 0 ) {
                    errors = 1;
                    jQuery("#ticket-phone").addClass("error");
                }

                if( errors == 0 ) {
                    jQuery("#stripeName").val( jQuery("#ticket-name").val() );
                    jQuery("#stripePhone").val( jQuery("#ticket-phone").val() );
                    update_ticket_cart_total_submit_ajax( gateway );
                }

            } else {
                update_ticket_cart_total_submit_ajax( gateway );
            }

        }

        function update_ticket_cart_total_submit_ajax( gateway ) {

            var gateway_update_cart = $('input[name=payment]:checked').val();

            console.log(gateway);

            var amount = jQuery(".royaltickets-qty .count").val();
            var ticket_title = jQuery("#ticket-type").find(':selected').attr('data-title');

            if( gateway_update_cart == 'PayPal' ) {

                var parent_ticket_ID = jQuery("#paypal_parentTicketID").val();
                var ticket_id = jQuery("#paypal_ticketID").val();
                var event_ID = jQuery("#paypal_eventID").val();

            } else if( gateway_update_cart == 'Stripe' ) {

                var parent_ticket_ID = jQuery("#parentTicketID").val();
                var ticket_id = jQuery("#ticketID").val();
                var event_ID = jQuery("#eventID").val();

            } else if( gateway_update_cart == 'PayFast' ) {

                var parent_ticket_ID = jQuery("#payfast_ticketParentID").val();
                var ticket_id = jQuery("#paypal_ticketID").val();
                var event_ID = jQuery("#payfast_ticketEventID").val();

            }

            var fd = new FormData();
            fd.append('ticket_ID', ticket_id);
            fd.append('parent_ticket_ID', parent_ticket_ID);
            fd.append('event_ID', event_ID);
            fd.append('amount', amount);
            fd.append('action', 'royaltickets_ajax_update_cart');

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    jQuery("#message-wrapper").html('');
                    jQuery("#ticket-subtotal").html('<i class="fas fa-spinner fa-spin fs-30"></i>');
                    if(gateway == 'stripe' || gateway == 'paypal') {
                        jQuery("#place-order").html('<i class="fas fa-spinner fa-spin fs-30"></i>');
                    }
                },
                success: function (data) {
                    console.log(data);
                    //console.log("success")
                    jQuery("#ticket-subtotal").html(data.total_price);
                    jQuery(".royaltickets-qty .count").val(data.amount);
                    jQuery("#ticket-type").html(data.tickets_list);
                    jQuery('#ticket-type').trigger("chosen:updated");

                    var ticket_desc = jQuery('#ticket-type').find(':selected').attr('data-desc');
                    if(ticket_desc) {
                        jQuery('.ticket-desc').html('<i class="fe fe-info opacity_60 mr-2 fs-80 d-inline-block"></i>' + ticket_desc);
                        jQuery('.ticket-desc').attr("style", "display: inline-block !important");
                    } else {
                        jQuery('.ticket-desc').text('');
                        jQuery('.ticket-desc').attr("style", "display: none !important");
                    }

                    jQuery("#ticketID").val(ticket_id);
                    jQuery("#paypal_ticketID").val(ticket_id);
                    jQuery("#payfast_ticketID").val(ticket_id);

                    jQuery("#pay_amount").val(data.total_clean_price);
                    jQuery("#paypal_amount").val(data.total_clean_price);
                    jQuery("#payfast_price").val(data.total_clean_price);

                    jQuery(".stripe_amount").val(amount);
                    jQuery(".paypal_amount").val(amount);
                    jQuery("#payfast_amount").val(amount);

                    jQuery(".stripe_title").val(ticket_title);
                    jQuery(".paypal_title").val(ticket_title);
                    jQuery("#payfast_name").val(ticket_title);

                    if(data.error_status === 1) {
                        jQuery("#message-wrapper").html(data.errors);
                    }

                    if(data.not_tickets_for_sale === 1) {
                        jQuery(".payment-wrapper").html('');
                    }

                    if(gateway == 'stripe') {
                        console.log("fire_stripe_gateway");
                        jQuery("#place-order").removeClass("disabled");
                        jQuery("#place-order").html(royalticketsSettings.place_order);
                        if(data.error_status === 0 && data.not_tickets_for_sale === 0) {
                            fire_stripe_gateway();
                        }

                    } else if(gateway == 'paypal') {
                        console.log("fire_paypal_gateway");
                        jQuery("#place-order").removeClass("disabled");
                        jQuery("#place-order").html(royalticketsSettings.place_order);
                        if(data.error_status === 0 && data.not_tickets_for_sale === 0) {
                            fire_paypal_gateway();
                        }
                    } else if(gateway == 'payfast') {
                        console.log("fire_payfast_gateway");
                        jQuery("#place-order").removeClass("disabled");
                        jQuery("#place-order").html(royalticketsSettings.place_order);
                        if(data.error_status === 0 && data.not_tickets_for_sale === 0) {
                            var name = jQuery('#ticket-name').val();
                            var email = jQuery('#ticket-email').val();
                            var phone = jQuery('#ticket-phone').val();
                            $('input#payfast_buyer_name').val(name);
                            $('input#payfast_buyer_email').val(email);
                            $('input#payfast_buyer_phone').val(phone);
                            $('form#payfast-buy-now-form').submit();
                        }
                    }

                },
                error:  function (data) {
                    console.log("error");
                    //console.log(data);
                },

            });

        }

        function fire_stripe_gateway() {
            var stripe_amount = jQuery('.stripe_amount').val();
            var stripe_title = jQuery('.stripe_title').val();
            var pay_amount = jQuery('#pay_amount').val();
            var email = jQuery('#ticket-email').val();
            var handler = StripeCheckout.configure({
                key: royalticketsSettings.royaltickets_stripe_publishable_key,
                locale: 'auto',
                name: stripe_amount + ' x ' + stripe_title,
                token: function(token) {
                    $('input#stripeToken').val(token.id);
                    $('input#stripeEmail').val(email);
                    $('form.royaltickets_payment_form').submit();
                }
            });
            var amount = pay_amount * 100; // Needs to be an integer!
            handler.open({
              amount: Math.round(amount)
            });
        }

        function fire_paypal_gateway() {
            var paypal_amount = jQuery('.paypal_amount').val();
            var paypal_title = jQuery('.paypal_title').val();
            var pay_amount = jQuery('#paypal_amount').val();
            var parentTicketID = jQuery('#paypal_parentTicketID').val();
            var ticketID = jQuery('#paypal_ticketID').val();
            var eventID = jQuery('#paypal_eventID').val();
            var fullname = jQuery('#ticket-name').val();
            var email = jQuery('#ticket-email').val();
            var phone = jQuery('#ticket-phone').val();
            var return_link = jQuery('#paypal_return_link').val();
            var security = jQuery('#paypal-security').val();

            var fd = new FormData();
            fd.append('action', 'paypal_pay_ticket');
            fd.append('parentTicketID', parentTicketID);
            fd.append('paypal_amount', paypal_amount);
            fd.append('paypal_title', paypal_title);
            fd.append('pay_amount', pay_amount);
            fd.append('ticketID', ticketID);
            fd.append('eventID', eventID);
            fd.append('fullname', fullname);
            fd.append('email', email);
            fd.append('phone', phone);
            fd.append('return_link', return_link);
            fd.append('security', security);

            $.ajax({
                type: 'POST',
                url: royalticketsSettings.royaltickets_ajaxurl,
                dataType: 'json',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function( ) {
                    //
                    jQuery("#place-order").addClass("disabled");
                    jQuery('.preloader').fadeIn(100);
                },
                success: function( data ) {
                    console.log(data);
                    if(data.success) {
                        window.location.href = data.payment_execute_url;
                    } else {
                        // Error
                        $('#royaltickets_notify').html('<div class="alert alert-danger alert-dismissible" role="alert">'+data.message+'</div>');
                    }
                },
                error: function(xhr, status, error) {
                    console.log(xhr);
                    jQuery('.preloader').fadeOut(400);
                    // var err = eval("(" + xhr.responseText + ")");
                    // console.log(err.Message);
                }
            });

        }

        if( jQuery(".ticket-page-right").exists() ) {
            if( jQuery("#ticket-single-page .container").width() < $(window).width() ) {
                var margin_right = ( $(window).width() - jQuery("#ticket-single-page .container").width() ) / 2;
                jQuery('.ticket-page-right').css('right', -margin_right);
            }
        };

        $(window).on('resize', function(event) {

            if( jQuery(".ticket-page-right").exists() ) {
                if( jQuery("#ticket-single-page .container").width() < $(window).width() ) {
                    var margin_right = ( $(window).width() - jQuery("#ticket-single-page .container").width() ) / 2;
                    jQuery('.ticket-page-right').css('right', -margin_right);
                }
            };

        })

        if( jQuery("#event_place_map").exists() ) {

            var royaltickets_latitude = parseFloat(jQuery("#event_place_map_lat").val());
            var royaltickets_longitude = parseFloat(jQuery("#event_place_map_lang").val());


            //console.log(royaltickets_latitude);
            //console.log(royaltickets_longitude);

            if( royaltickets_latitude !== '' && royaltickets_longitude !== '' ) {

                var map = new google.maps.Map(document.getElementById('event_place_map'), {
                    center: {lat: royaltickets_latitude, lng: royaltickets_longitude},
                    zoom: 15,
                });

                var pin = royalticketsSettings.url_theme+'/assets/images/map-pin.svg';

                var marker = new google.maps.Marker({
                    position: map.getCenter(),
                    icon: pin,
                    map: map
                });

            }

        }

        if( jQuery(".event-media").exists() ) {
            /* init Jarallax */
            var cover_width = $(window).width() - ( ( $(window).width() - jQuery(".event-media-wrapper").width() ) / 2 );
            jQuery(".event-media").css('width', cover_width);
            jQuery(".event-media").css('max-width', cover_width);
        }

        $(window).on('resize', function(event) {

            if( jQuery(".event-media").exists() ) {
                /* init Jarallax */
                var cover_width = $(window).width() - ( ( $(window).width() - jQuery(".event-media-wrapper").width() ) / 2 );
                jQuery(".event-media").css('width', cover_width);
                jQuery(".event-media").css('max-width', cover_width);
            }

        });

        if( jQuery(".jarallax").exists() ) {
            /* init Jarallax */
            jarallax(document.querySelectorAll('.jarallax'));
        }

        if( jQuery(".jarallax-keep-img").exists() ) {
            jarallax(document.querySelectorAll('.jarallax-keep-img'), {
                keepImg: true,
            });
        }

        function royaltickets_show_current_time() {

            
            var offset = jQuery("#offset").text();
            var date_format = jQuery("#date-format").text();
            var time_format = jQuery("#time-format").text();

            function calcTime(offset) {
                // create Date object for current location
                var d = new Date();

                // convert to msec
                // subtract local time zone offset
                // get UTC time in msec
                var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

                var sd = new Date( utc + (3600000*offset) ); 

                //console.log( sd );

                // create new Date object for different city
                // using supplied offset
                //var nd = new Date( 'F j, Y g:i A', utc + (3600000*offset) );
                var nd = date_to_string( date_format + ' ' + time_format, sd );

                return nd;
            }

            function updateTime(){
                var final_date = calcTime(offset);
                jQuery('.date_and_time').html( final_date );
                //console.log( final_date );
            }
            $(function(){
                setInterval(updateTime, 1000);
            });

        }

        royaltickets_show_current_time();

        if( jQuery(".events-full-carousel").exists() ) {

            // vehicles carousel
            jQuery('.events-full-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                margin: 30,
                nav: true,
                dots: true,
                smartSpeed: 700,
                navText: [
                    "<i class='fe fe-arrow-left d-inline'></i>",
                    "<i class='fe fe-arrow-right d-inline'></i>"
                ],
                responsive:{
                    0:{
                        items: 1
                    },
                    400:{
                        items: 1
                    },
                    600:{
                        items: 2
                    },
                    800:{
                        items: 2
                    },
                    1025:{
                        items: 3
                    }
                }
            });

        }

        if( jQuery(".testimonials-carousel").exists() ) {

            // vehicles carousel
            jQuery('.testimonials-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                smartSpeed: 700,
                autoplay: true,
                navText: [
                    "<i class='fe fe-chevron-left d-inline'></i>",
                    "<i class='fe fe-chevron-right d-inline'></i>"
                ],
                responsive:{
                    0:{
                        items: 1
                    },
                    400:{
                        items: 1
                    },
                    600:{
                        items: 2
                    },
                    800:{
                        items: 3
                    },
                    1025:{
                        items: 4
                    }
                }
            });

        }

        if( jQuery(".testimonials-carousel-alt").exists() ) {

            // vehicles carousel
            jQuery('.testimonials-carousel-alt').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                smartSpeed: 700,
                autoplay: true,
                navText: [
                    "<i class='fe fe-chevron-left d-inline'></i>",
                    "<i class='fe fe-chevron-right d-inline'></i>"
                ],
                responsive:{
                    0:{
                        items: 1
                    },
                    400:{
                        items: 1
                    },
                    600:{
                        items: 2
                    },
                    1025:{
                        items: 3
                    }
                }
            });

        }

        if( jQuery(".taxonomy-carousel").exists() ) {

            // vehicles carousel
            jQuery('.taxonomy-carousel').owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                nav: true,
                dots: false,
                smartSpeed: 700,
                navText: [
                    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;float:left;" xml:space="preserve"><polygon class="st3" points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43 "></polygon></svg>',
                    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;float:left;" xml:space="preserve"><polygon class="st3" points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43 "></polygon></svg>',
                ],
                responsive:{
                    0:{
                        items: 1
                    },
                    400:{
                        items: 1
                    },
                    600:{
                        items: 2
                    },
                    1025:{
                        items: 3
                    }
                }
            });

        }

        if( jQuery(".taxonomy-carousel-style-alt").exists() ) {

            // vehicles carousel
            jQuery('.taxonomy-carousel-style-alt').owlCarousel({
                loop: false,
                margin: 30,
                nav: true,
                dots: false,
                smartSpeed: 700,
                navText: [
                    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;float:left;" xml:space="preserve"><polygon class="st3" points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43 "></polygon></svg>',
                    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;float:left;" xml:space="preserve"><polygon class="st3" points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43 "></polygon></svg>',
                ],
                responsive:{
                    0:{
                        items: 1
                    },
                    400:{
                        items: 1
                    },
                    600:{
                        items: 2
                    },
                    1025:{
                        items: 3
                    }
                }
            });

        }

        if( jQuery(".taxonomy-carousel-style-5").exists() ) {

            // vehicles carousel
            jQuery('.taxonomy-carousel-style-5').owlCarousel({
                loop: false,
                margin: 30,
                nav: true,
                dots: false,
                smartSpeed: 700,
                navText: [
                    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;float:left;" xml:space="preserve"><polygon class="st3" points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43 "></polygon></svg>',
                    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;float:left;" xml:space="preserve"><polygon class="st3" points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43 "></polygon></svg>',
                ],
                responsive:{
                    0:{
                        items: 1
                    },
                    400:{
                        items: 2
                    },
                    600:{
                        items: 3
                    },
                    1025:{
                        items: 4
                    }
                }
            });

        }

    });

    /* ------------------------------------------------------------------------ */
    /*  Favorites Panel
    /* ------------------------------------------------------------------------ */
    $(document).on('click', '.favorite-action-button, .favorite-panel-header i.close, .favorite-mask', function(e) {
        //console.log('ceva');
        e.preventDefault();
        if( $('.favorite-panel').hasClass('panel-open') ){
            $('.favorite-mask').fadeOut(200);
            $('.favorite-panel').removeClass('panel-open');
            $('body').css('overflow', 'auto');
            $('body').css('overflow-x', 'hidden');
        } else {
            $('.favorite-panel').addClass('panel-open');
            $('.favorite-mask').fadeIn(200);
            $('body').css('overflow', 'hidden');
        }
    });

    /* ------------------------------------------------------------------------ */
    /*  Side Menu
    /* ------------------------------------------------------------------------ */
    $(document).on('click', '.sidebarmenu-action-button, .side-menu-panel-header i.close, .side-menu-mask', function(e) {
        //console.log('ceva');
        e.preventDefault();
        if( $('.side-menu-panel').hasClass('panel-open') ){
            $('.side-menu-mask').fadeOut(200);
            $('.side-menu-panel').removeClass('panel-open');
            $('body').css('overflow', 'auto');
            $('body').css('overflow-x', 'hidden');
        } else {
            $('.side-menu-panel').addClass('panel-open');
            $('.side-menu-mask').fadeIn(200);
            $('body').css('overflow', 'hidden');
        }
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    if( jQuery(".royaltickets-search-locations-list").exists() ) {

        $(document).on('click', '.royaltickets-search-locations-list li a', function(e){
            e.preventDefault();
            var dataLocation = $(this).attr('data-location');
            jQuery("form.advance-search-form #custom-location").val(dataLocation);
            jQuery("form.advance-search-form").submit();
        });

    }

    if( jQuery(".event_submit_agree").exists() ) {

        jQuery("#royaltickets_submit_event_loggedout").addClass("disabled");
        jQuery("#royaltickets_register_submit_widget").addClass("disabled");
        jQuery("#royaltickets_register_submit").addClass("disabled");

    } else {

        jQuery("#royaltickets_submit_event_loggedout").removeClass("disabled");
        jQuery("#royaltickets_register_submit_widget").removeClass("disabled");
        jQuery("#royaltickets_register_submit").removeClass("disabled");

    }

    jQuery(document).on('change', '.event_submit_agree', function() {

        if( this.checked ) {

            jQuery("#royaltickets_submit_event_loggedout").removeClass("disabled");
            jQuery("#royaltickets_register_submit_widget").removeClass("disabled");
            jQuery("#royaltickets_register_submit").removeClass("disabled");

        } else {

            jQuery("#royaltickets_submit_event_loggedout").addClass("disabled");
            jQuery("#royaltickets_register_submit_widget").addClass("disabled");
            jQuery("#royaltickets_register_submit").addClass("disabled");

        }

    });

    jQuery('.royaltickets-entry-title h3').each(function(){
        var me = $(this);
        me.html(me.html().replace(/^(\w+)/, '<span>$1</span>'));
    });

    function Temp(el, options) {
        this.el = $(el);
        this.init(options);
    }

    Temp.DEFAULTS = {
        sticky: true
    }

    Temp.prototype = {
        init: function (options) {
            var base = this;
                base.window = $(window);
                base.options = $.extend({}, Temp.DEFAULTS, options);
                base.stickyWrap = $('.sticky-header');
                base.goTop = $('<a id="go-to-top" href="#" class="cd-top cd-fade-out go-to-top"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;float:left;" xml:space="preserve"><style type="text/css">.st3{fill:#DA1F2D;}</style><polygon class="st3" points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43 "/></svg></span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" style="enable-background:new 0 0 70 70;float:left" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:#D9092B;stroke-width:12;}.st1{opacity:0.05;}</style><circle class="st1" cx="35" cy="35" r="35"/><g><path class="st0" d="M35,6c16,0,29,13,29,29S51,64,35,64S6,51,6,35S18.9,6,35,6" stroke-dasharray="251.2,251.2"/></g></svg></a>').appendTo(base.el);

            // Sticky
            if (base.options.sticky) {
                base.sticky.stickySet.call(base, base.window);
                base.stickyWrap.before($(".sticky-header").clone().addClass("clone-fixed"));
                $(".sticky-header.clone-fixed").removeClass("visible-header");
                
                $( window ).on('load resize', function() {

                    //$(".sticky-header.clone-fixed").css('top', '-' + ($('#header').outerHeight()+100) + 'px');
                     
                });
                
            }
            
            // Scroll Event
            jQuery('#go-to-top svg path').attr({'stroke-dasharray': '0, 251.2'});
            base.window.on('scroll', function (e) {

                if( jQuery(".crisp-client").exists() ) {
                    jQuery("#go-to-top").css("bottom", 90);
                }

                var wintop = $(window).scrollTop(), 
                    docheight = $(document).height(), 
                    winheight = $(window).height();

                var value = Math.ceil((wintop/(docheight-winheight))*100);
                var circleTotal = 182 * value / 100;

                //console.log(circleTotal);

                $('#go-to-top svg path').attr({ 'stroke-dasharray':circleTotal+',251.2'});

                if (base.options.sticky) {
                    base.sticky.stickyInit.call(base, e.currentTarget);
                }
                base.gotoTop.scrollHandler.call(base, e.currentTarget);
            });

            // Click Handler Button GotoTop
            base.gotoTop.clickHandler(base);
        },

        sticky: {

            stickySet: function () {
                var stickyWrap = this.stickyWrap, offset;
                if (stickyWrap.length) {
                    offset = stickyWrap.outerHeight();
                    $.data(stickyWrap, 'data', {
                        offset: offset,
                        height: stickyWrap.outerHeight(true)
                    });
                     
                }
            },
            stickyInit: function (win) {
                var base = this, data;
                if (base.stickyWrap.length) {
                    data = $.data(base.stickyWrap, 'data');
                    base.sticky.stickyAction(data, win, base);
                }
            },
            stickyAction: function (data, win, base) {
                var scrollTop = $(win).scrollTop();
                if (scrollTop > data.offset)  {
                    if (!base.stickyWrap.hasClass('sticky')) {
                        base.stickyWrap.addClass('sticky');
                        $('.sticky-header.clone-fixed').addClass('slideDown');
                    }
                } else {
                    if (base.stickyWrap.hasClass('sticky')) {
                        base.stickyWrap.removeClass('sticky');
                        $('.sticky-header.clone-fixed').removeClass('slideDown');
                    }
                }
            }
        },
        gotoTop: {
            scrollHandler: function (win) {
                $(win).scrollTop() > 200 ?
                    this.goTop.addClass('go-top-visible'):
                    this.goTop.removeClass('go-top-visible');
                    $('.fb-link').addClass('fb-visible');
            },
            clickHandler: function (self) {
                self.goTop.on('click', function (e) {
                    e.preventDefault();
                    $('html, body').animate({ scrollTop: 0 }, 800);
                });
            }
        }
    }

    /* Temp Plugin
     * ================================== */

    $.fn.Temp = function (option) {
        return this.each(function () {
            var $this = $(this), data = $this.data('Temp'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('Temp', new Temp(this, options));
            }
        });
    }

    /* ---------------------------------------------------- */
    /*  Sticky menu                                         */
    /* ---------------------------------------------------- */

    if ( $('#header').hasClass('sticky-header') ) {
        
        $('body').Temp({
            sticky: true
        });
    
    }

  	$(document).ready(function () {

        royaltickets_ajax_add_to_favorites();

        royaltickets_ajax_login();
        royaltickets_ajax_register();

        royaltickets_submit_review();

        royaltickets_ajax_login_widget();
        royaltickets_ajax_register_widget();

        royaltickets_ajax_reset();
        royaltickets_geo_code_location();
        royaltickets_ajax_submit_event();
        royaltickets_ajax_submit_event_front();

        if( jQuery("#event_map").exists() ) {

            var mapDiv,
                map,
                infobox;

            var event_map_lat = jQuery("#event_map_lat").val();
            var event_map_lang = jQuery("#event_map_lang").val();
            var map_pin = jQuery("#map_pin").val();
            var template_directory_url = jQuery("#template_directory_url").val();

            mapDiv = $("#event_map");
            mapDiv.height(560).gmap3({
                map: {
                    options: {
                        "center": [event_map_lat,event_map_lang]
                        ,"zoom": 16
                        ,"draggable": true
                        ,"mapTypeControl": true
                        ,"mapTypeId": google.maps.MapTypeId.ROADMAP
                        ,"scrollwheel": false
                        ,"panControl": true
                        ,"rotateControl": false
                        ,"scaleControl": true
                        ,"streetViewControl": true
                        ,"zoomControl": true
                    }
                }
                ,marker: {
                    values: [

                    {

                        latLng: [event_map_lat,event_map_lang],
                        options: {
                            icon: map_pin,
                            shadow: template_directory_url + "/images/shadow.png",
                        }
                    }   
                            
                    ],
                    options:{
                        draggable: false
                    }
                }
            });

            map = mapDiv.gmap3("get");

            function royaltickets_initialize_poi(map_for_poi){

                var poi_marker_array=[];
            
                var poi_service = new google.maps.places.PlacesService(map_for_poi);
                var already_serviced = '';
                var show_poi = '';
                var poi_type = '';
                var marker = '';
                var map_bounds = map_for_poi.getBounds();
                var selector = '.google_poi';

                jQuery(document).on('click', selector, function(event){

                    event.stopPropagation();
                    var poi_type = jQuery(this).attr('id');
                    var position = map_for_poi.getCenter();
                    var show_poi = royaltickets_return_poi_values(poi_type);

                    if( jQuery(this).hasClass('poi_active') ){
                        royaltickets_show_hide_poi(poi_type,'hide');
                    } else {
                        already_serviced = royaltickets_show_hide_poi(poi_type,'show');
                        if( already_serviced === 1 ){
                            var request = {
                                location: position,
                                types: show_poi,
                                bounds: map_bounds,
                                radius: 2500,
                            };
                            poi_service.nearbySearch(request,function(results,status){
                                royaltickets_googlemap_display_poi(results,status,map_for_poi,poi_type)
                            });
                        }
                    }

                    jQuery(this).toggleClass('poi_active');

                });

                function royaltickets_return_poi_values(poi_type){
                    var show_poi;switch(poi_type){
                        case'transport': show_poi=['bus_station','airport','train_station','subway_station'];
                        break;
                        case'supermarkets': show_poi=['grocery_or_supermarket','shopping_mall'];
                        break;
                        case'schools': show_poi=['school','university'];
                        break;
                        case'restaurant': show_poi=['restaurant'];
                        break
                        case'pharma': show_poi=['pharmacy'];
                        break;
                        case'hospitals': show_poi=['hospital'];
                        break;
                    }
                    return show_poi;
                }

                function royaltickets_googlemap_display_poi(results,status,map_for_poi,poi_type){
                    var place, poi_marker;
                    if( google.maps.places.PlacesServiceStatus.OK==status ){
                        for( var i=0; i<results.length; i++ ){
                            poi_marker = royaltickets_create_poi_marker(results[i],map_for_poi,poi_type);
                            poi_marker_array.push(poi_marker);
                        }
                    }
                }

                function royaltickets_create_poi_marker(place,map_for_poi,poi_type){
                    marker = new google.maps.Marker({
                        map: map_for_poi,
                        position: place.geometry.location,
                        show_poi: poi_type,
                        //icon: royalticketsSettings.url_theme+'/images/map-pin.svg'
                        icon: royalticketsSettings.url_theme+'/images/poi/'+poi_type+'.svg'
                    });
                    var boxText = document.createElement("div");
                    var infobox_poi = new InfoBox({
                        content: boxText,
                        boxClass: "royaltickets_poi_box",
                        pixelOffset: new google.maps.Size(-40,-120),
                        zIndex: null,
                        maxWidth: 275,
                        closeBoxMargin: "-13px 0px 0px 0px",
                        closeBoxURL: "",
                        infoBoxClearance: new google.maps.Size(1,1),
                        pane: "floatPane",
                        enableEventPropagation: false
                    });
                    google.maps.event.addListener(marker,'mouseover',function(event){
                        infobox_poi.setContent(place.name);
                        infobox_poi.open(map,this);
                    });
                    google.maps.event.addListener(marker,'mouseout',function(event){
                        if( infobox_poi !== null ){
                            infobox_poi.close();
                        }
                    });
                    return marker;
                }

                function royaltickets_show_hide_poi(poi_type,showhide){
                    var is_hiding = 1;
                    for( var i=0; i<poi_marker_array.length; i++ ){
                        if( poi_marker_array[i].show_poi === poi_type ){
                            if( showhide === 'hide' ){
                                poi_marker_array[i].setVisible(false);
                            } else {
                                poi_marker_array[i].setVisible(true);
                                is_hiding = 0;
                            }
                        }
                    }

                    return is_hiding;

                }
            }

            royaltickets_initialize_poi(map);

        }

        if( jQuery("#contact-agent-button").exists() ) {

            document.getElementById('contact-agent-button').addEventListener('click', function(e) {

                if(jQuery("#event-contact-agent-form").valid()) {

                    jQuery('#contact-agent-button').html('<i class="fa fa-refresh fa-spin"></i>');
                    jQuery("#event-contact-agent-form").submit();

                } 

                e.preventDefault();
            });

            jQuery('#event-contact-agent-form').validate({
                rules: {
                    name: {
                        required: true
                    },
                    phone: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    }
                },
                submitHandler: function(form) {
                    jQuery(form).ajaxSubmit({
                        type: "POST",
                        data: jQuery(form).serialize(),
                        url: royalticketsSettings.royaltickets_ajaxurl,
                        success: function(data) {
                            jQuery('#contact-agent-button').html('Send Message');
                            jQuery('.message-container').css('display', 'inline-block');
                        },
                        error: function(data) {
                            jQuery('.error-container').css('display', 'inline-block');
                        }
                    });
                }
            });

        }

    });

    jQuery('.royaltickets-event-nav').on('click', 'ul li a:not(.fancybox)', function(e) {

        e.preventDefault();

        var data_id = jQuery(this).data('id');

        jQuery('.royaltickets-event-nav ul li a').removeClass('active');
        jQuery(this).addClass('active');

        jQuery('#event-location, #event-description, #event-photos, #event-amenities, #event-floor-plans, #event-child').addClass("event-hide-tab");
        jQuery('#'+data_id).removeClass("event-hide-tab");
        jQuery('.carousel-slider').resize();

    });

    // Print Event Page
    $(document).on('click', '#print_page', function(e){

        var myWindow, html;
        e.preventDefault();

        html = '<html><head><title>title here</title><link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet"><script src="' + royalticketsSettings.protocol + '://code.jquery.com/jquery-1.10.1.min.js"></script><script>$(window).load(function(){ print(); });</script><link href="' + royalticketsSettings.css_url + '" rel="stylesheet" type="text/css" /></head><body class="print_body" >' + jQuery("#print_page_content").html() + '</body></html>';

        myWindow = window.open('','Print Me','width=700 ,height=842');
        myWindow.document.write( html );
        myWindow.document.close();
        myWindow.focus();
        
    });

    // Update account settings
    var image_custom_uploader, image_featured_custom_uploader, this_image_holder, attachment, this_image_val, image_custom_uploader_floor;
    var divId = 0;

    // Delete uploaded image
    jQuery('#my-account-form').on('click', '.deleteUploadedImages', function(e) {
        jQuery(this).parent().remove();
        jQuery('.tooltip').remove();
        jQuery('#my-account-form .uploadedImages').css("display", "inline-block");
    });

    // Load Cover Image
    function readURLAccountImage(input) {
        if (input.files && input.files[0]) {

            var reader = new FileReader();
            reader.onload = function (e) {

                var image = new Image();
                image.src = e.target.result;

                image.onload = function() {

                    $('#up_images').html(
                        '<li class="col-md-12 myplugin-image-preview image-holder account-image"><i class="fa fa-spinner fa-spin"></i><span class="deleteUploadedImages" data-toggle="tooltip" data-placement="top"  data-original-title="' + royalticketsSettings.delete_image_text + '"><i class="fa fa-times" aria-hidden="true"></i></span><span class="image-holder"><img src="' + image.src + '" alt="Photo"></span><input type="hidden" id="profile_image_id" name="profile_image_id" value=""></li>'
                    );

                    royaltickets_submit_account_image( input.files[0] );

                }

            }
            reader.readAsDataURL(input.files[0]);

        }
    }
    $("#account_image").change(function(){
        readURLAccountImage(this);
    });

    function royaltickets_submit_account_image( image_src ) {

        var fd = new FormData();
        fd.append('image_src', image_src);
        fd.append('action', 'royaltickets_custom_submit_image_gallery');
        fd.append("file", image_src);

        $.ajax({
            type: 'POST',
            url: royalticketsSettings.royaltickets_ajaxurl,
            dataType: 'json',
            data: fd,
            contentType: false,
            processData: false,
            beforeSend: function(){
                //
                //console.log("begin upload");
                //jQuery("#image-gallery-" + idGen).addClass("ajax_loading");
                document.getElementById("account_image").value = "";
            },
            success: function (data) {
                console.log("success")
                //console.log(data.image_url);
                jQuery("#profile_image_id").val(data.image_id);
                jQuery("#up_images .myplugin-image-preview .image-holder").css('background-image', 'url(' + data.image_url + ')');
                //jQuery("#royaltickets-gallery-image-" + idGen).removeClass("ajax_loading");
                jQuery("#up_images .myplugin-image-preview").addClass("ajax_loaded");
            },
            error:  function (data) {
                console.log("error")
                //console.log(data);
            },
        });

    };

    //
    // Delete uploaded floor image
    jQuery('#royaltickets_floors_wrapper').on('click', '.deleteUploadedImages', function(e) {
        jQuery(this).parent().parent().parent().find(".ft_floor_plan_image").val("");
        jQuery(this).parent().remove();
        jQuery('.tooltip').remove();
    });

    // Load Floor Image
    function readURLFloorImage(input, this_image_holder) {
        if (input.files && input.files[0]) {

            var reader = new FileReader();
            reader.onload = function (e) {

                var image = new Image();
                image.src = e.target.result;

                image.onload = function() {

                    this_image_holder.find('.floor_image').html(
                        '<li class="col-md-12 myplugin-image-preview image-holder"><i class="fa fa-spinner fa-spin"></i><span class="deleteUploadedImages" data-toggle="tooltip" data-placement="top"  data-original-title="' + royalticketsSettings.delete_image_text + '"><i class="fa fa-times" aria-hidden="true"></i></span><span class="image-holder"><img src="'+image.src+'" alt="Floor image"></span><input type="hidden" id="profile_image_id" name="profile_image_id" value=""></li>'
                    );

                    royaltickets_submit_floor_image( input.files[0], this_image_holder );

                }

            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    jQuery('#royaltickets_floors_wrapper').on('change', '.upload_floor_image', function(e) {
        this_image_holder = $(this).parent().parent().parent();
        readURLFloorImage(this, this_image_holder);
    });

    function royaltickets_submit_floor_image( image_src, this_image_holder ) {

        var fd = new FormData();
        fd.append('image_src', image_src);
        fd.append('action', 'royaltickets_custom_submit_image_gallery');
        fd.append("file", image_src);

        $.ajax({
            type: 'POST',
            url: royalticketsSettings.royaltickets_ajaxurl,
            dataType: 'json',
            data: fd,
            contentType: false,
            processData: false,
            beforeSend: function(){
                //
                //console.log("begin upload");
                //jQuery("#image-gallery-" + idGen).addClass("ajax_loading");
                //document.getElementById("account_image").value = "";
            },
            success: function (data) {
                console.log("success")
                //console.log(data.image_url);
                this_image_holder.find(".ft_floor_plan_image").val(data.image_url);
                //jQuery("#royaltickets-gallery-image-" + idGen).removeClass("ajax_loading");
                this_image_holder.find(".floor_image .myplugin-image-preview").addClass("ajax_loaded");
            },
            error:  function (data) {
                console.log("error")
                //console.log(data);
            },
        });

    };

    // Delete uploaded image
    jQuery('#my-account-form').on('click', '.deleteUploadedCoverImage', function(e) {
        jQuery(this).parent().remove();
        jQuery('.tooltip').remove();
        jQuery('#my-account-form .uploadedCoverImage').css("display", "inline-block");
    });

    jQuery('#my-account-form').on('click', '.uploadedCoverImage', function(e) {
        e.preventDefault();

        this_image_holder = jQuery("#up_cover_image");

        // If the uploader object has already been created, reopen the dialog
        if (image_custom_uploader) {
            image_custom_uploader.open();
            return;
        }

        // Extend the wp.media object
        image_custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });

        // When a file is selected, grab the URL and set it as the text field's value
        image_custom_uploader.on( 'select', function(){

            var attachments = image_custom_uploader.state().get('selection').map( 

                function( attachment ) {

                    attachment.toJSON();
                    return attachment;

            });

            //loop through the array and do things with each attachment

           var i;

           for (i = 0; i < attachments.length; ++i) {

                //sample function 1: add image preview
                $('#up_cover_image').append(
                    '<li class="col-md-4 myplugin-image-preview image-holder grabbable"><span class="deleteUploadedCoverImage" data-toggle="tooltip" data-placement="top"  data-original-title="' + royalticketsSettings.delete_image_text + '"><i class="fa fa-times" aria-hidden="true"></i></span><img class="image-holder" src="' + attachments[i].attributes.url + '" /><input type="hidden" name="profile_cover_image_id" value="' + attachments[i].id + '"></li>'
                );

            }

            jQuery('#my-account-form .uploadedImages').css("display", "none");

        });

        //Open the uploader dialog
        image_custom_uploader.open();
    });

    // Upload attachments
    // Load Floor Image
    function readURLFile(input, this_image_holder) {
        if (input.files && input.files[0]) {

            function get_icon_for_extension($ext){
                switch($ext){
                    /* PDF */
                    case 'pdf':
                        return '<i class="fa fa-file-pdf-o"></i>';

                    /* Images */
                    case 'jpg':
                    case 'png':
                    case 'gif':
                    case 'bmp':
                    case 'jpeg':
                    case 'tiff':
                    case 'tif':
                        return '<i class="fa fa-file-image-o"></i>';

                    /* Text */
                    case 'txt':
                    case 'log':
                    case 'tex':
                        return '<i class="fa fa-file-text-o"></i>';

                    /* Documents */
                    case 'doc':
                    case 'odt':
                    case 'msg':
                    case 'docx':
                    case 'rtf':
                    case 'wps':
                    case 'wpd':
                    case 'pages':
                        return '<i class="fa fa-file-word-o"></i>';

                    /* Spread Sheets */
                    case 'csv':
                    case 'xlsx':
                    case 'xls':
                    case 'xml':
                    case 'xlr':
                        return '<i class="fa fa-file-excel-o"></i>';

                    /* Zip */
                    case 'zip':
                    case 'rar':
                    case '7z':
                    case 'zipx':
                    case 'tar.gz':
                    case 'gz':
                    case 'pkg':
                        return '<i class="fa fa-file-zip-o"></i>';

                    /* Audio */
                    case 'mp3':
                    case 'wav':
                    case 'm4a':
                    case 'aif':
                    case 'wma':
                    case 'ra':
                    case 'mpa':
                    case 'iff':
                    case 'm3u':
                        return '<i class="fa fa-file-audio-o"></i>';

                    /* Video */
                    case 'avi':
                    case 'flv':
                    case 'm4v':
                    case 'mov':
                    case 'mp4':
                    case 'mpg':
                    case 'rm':
                    case 'swf':
                    case 'wmv':
                        return '<i class="fa fa-file-video-o"></i>';

                    /* Others */
                    default:
                        return '<i class="fa fa-file-o"></i>';
                }
            }

            jQuery(input.files).each(function () {

                var file = $(this);

                console.log(file[0]);

                var extension = file[0].name.replace(/^.*\./, '');

                var idGen = generate_ID();

                //sample function 1: add image preview
                $('ul.attachments-list').append(
                    '<li id="attachment-'+idGen+'" class="' + extension + ' loading"><a target="_blank" href="#"><i class="fa fa-spinner fa-spin fa-fw"></i>' + get_icon_for_extension( extension ) + '' + file[0].name + '</a><a class="delete_attached_file" href="#"><i class="fa fa-times-circle" aria-hidden="true"></i></a><input class="attachment-id" type="hidden" name="ft_attachments[]" value="" /></li>'
                );

                royaltickets_submit_files( file[0], idGen );

            });
        }
    }

    jQuery('#royaltickets-event-attachments').on('change', '.uploadedFilesAjax', function(e) {
        readURLFile(this);
    });

    function royaltickets_submit_files( image_src, idGen ) {

        var fd = new FormData();
        fd.append('image_src', image_src);
        fd.append('action', 'royaltickets_custom_submit_image_gallery');
        fd.append("file", image_src);

        $.ajax({
            type: 'POST',
            url: royalticketsSettings.royaltickets_ajaxurl,
            dataType: 'json',
            data: fd,
            contentType: false,
            processData: false,
            beforeSend: function(){
                //
                //console.log("begin upload");
            },
            success: function (data) {
                console.log("success")
                //console.log(data.image_url);
                jQuery("#attachment-" + idGen).removeClass("loading");
                jQuery("#attachment-" + idGen + ' a').attr("src", data.image_url);
                jQuery("#attachment-" + idGen + ' .attachment-id').val(data.image_id);
                
            },
            error:  function (data) {
                console.log("error")
                //console.log(data);
            },
        });

    };

    // Delete uploaded event attached files
    jQuery('#royaltickets-event-attachments').on('click', '.delete_attached_file', function(e) {
        e.preventDefault();
        jQuery(this).parent().remove();
        jQuery('.tooltip').remove();
        jQuery('#royaltickets-event-attachments .uploadedFilesAjax').css("display", "inline-block");
    });

    jQuery('#royaltickets-event-attachments').on('click', '.uploadedFiles', function(e) {
        e.preventDefault();

        this_image_holder = jQuery("#royaltickets-event-attachments .attachments-list");

        // If the uploader object has already been created, reopen the dialog
        if (image_custom_uploader) {
            image_custom_uploader.open();
            return;
        }

        // Extend the wp.media object
        image_custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose File',
            button: {
                text: 'Choose File'
            },
            multiple: true
        });

        // When a file is selected, grab the URL and set it as the text field's value
        image_custom_uploader.on( 'select', function(){

            var attachments = image_custom_uploader.state().get('selection').map( 

                function( attachment ) {

                    attachment.toJSON();
                    return attachment;

            });

            console.log(attachments);

            function get_icon_for_extension($ext){
                switch($ext){
                    /* PDF */
                    case 'pdf':
                        return '<i class="fa fa-file-pdf-o"></i>';

                    /* Images */
                    case 'jpg':
                    case 'png':
                    case 'gif':
                    case 'bmp':
                    case 'jpeg':
                    case 'tiff':
                    case 'tif':
                        return '<i class="fa fa-file-image-o"></i>';

                    /* Text */
                    case 'txt':
                    case 'log':
                    case 'tex':
                        return '<i class="fa fa-file-text-o"></i>';

                    /* Documents */
                    case 'doc':
                    case 'odt':
                    case 'msg':
                    case 'docx':
                    case 'rtf':
                    case 'wps':
                    case 'wpd':
                    case 'pages':
                        return '<i class="fa fa-file-word-o"></i>';

                    /* Spread Sheets */
                    case 'csv':
                    case 'xlsx':
                    case 'xls':
                    case 'xml':
                    case 'xlr':
                        return '<i class="fa fa-file-excel-o"></i>';

                    /* Zip */
                    case 'zip':
                    case 'rar':
                    case '7z':
                    case 'zipx':
                    case 'tar.gz':
                    case 'gz':
                    case 'pkg':
                        return '<i class="fa fa-file-zip-o"></i>';

                    /* Audio */
                    case 'mp3':
                    case 'wav':
                    case 'm4a':
                    case 'aif':
                    case 'wma':
                    case 'ra':
                    case 'mpa':
                    case 'iff':
                    case 'm3u':
                        return '<i class="fa fa-file-audio-o"></i>';

                    /* Video */
                    case 'avi':
                    case 'flv':
                    case 'm4v':
                    case 'mov':
                    case 'mp4':
                    case 'mpg':
                    case 'rm':
                    case 'swf':
                    case 'wmv':
                        return '<i class="fa fa-file-video-o"></i>';

                    /* Others */
                    default:
                        return '<i class="fa fa-file-o"></i>';
                }
            }

            //loop through the array and do things with each attachment
            var i;

            for (i = 0; i < attachments.length; ++i) {

                //sample function 1: add image preview
                $('ul.attachments-list').append(
                    '<li class="' + attachments[i].attributes.subtype + '"><a target="_blank" href="' + attachments[i].attributes.url + '">' + get_icon_for_extension( attachments[i].attributes.subtype ) + '' + attachments[i].attributes.title + '</a><a class="delete_attached_file" href="#"><i class="fa fa-times-circle" aria-hidden="true"></i></a><input type="hidden" name="ft_attachments[]" value="' + attachments[i].id + '" /></li>'
                );

            }

        });

        //Open the uploader dialog
        image_custom_uploader.open();
    });
    // End

    jQuery('#royaltickets_update_account').on('click', function (e) {
        e.preventDefault();
        var errors = 0;
        var royaltickets_timeout;
        var update_my_account = {
            type: "POST",
            dataType: 'json',
            beforeSubmit:  function(){
                jQuery('#royaltickets_update_account .fa-spinner').css('display', 'inline-block');
                jQuery('#confirm_new_password_error').css("display", "none");
            },
            success: function(data){
                //console.log(data);
                jQuery('#royaltickets_update_account .fa-spinner').css('display', 'none');
                clearTimeout(royaltickets_timeout);
                jQuery('.single-add-to-compare').addClass('single-add-to-favorites-visible');
                jQuery('.single-add-to-compare .royaltickets-title').text(data.response);
                royaltickets_timeout = setTimeout(function(){
                    $('.single-add-to-compare').removeClass('single-add-to-favorites-visible');
                }, 5000);
                window.location.reload(true);
            },
            error: function(data){
                //
                jQuery('#royaltickets_update_account .fa-spinner').css('display', 'none');
            }
        };

        var password = $("#new_password").val();
        var confirmPassword = $("#confirm_new_password").val();

        if ( password != confirmPassword ) { // Validate repeat password
            errors = 1;
            $('#confirm_new_password_error').css("display", "inline-block");
            $('html, body').animate({
                scrollTop: $("#confirm_new_password_error").offset().top - 180
            }, 500);
            return;
        }

        if( errors == 0 ) {
            jQuery('#my-account-form').ajaxSubmit( update_my_account );
        } else {
            return false;
        }

    });
    // End

    // Add New notification set
    jQuery('#royaltickets-add-notification').on('click', function (e) {
        e.preventDefault();
        var royaltickets_timeout;
        var add_new_notification = {
            type: "POST",
            dataType: 'json',
            beforeSubmit:  function(){
                jQuery('#royaltickets-add-notification .fa-spinner').css('display', 'inline-block');
            },
            success: function(data){
                jQuery('#royaltickets-add-notification .fa-spinner').css('display', 'none');
                jQuery('#royaltickets-add-notification .fa-check').css('display', 'inline-block');
                clearTimeout(royaltickets_timeout);
                jQuery('.single-add-to-compare').addClass('single-add-to-favorites-visible');
                jQuery('.single-add-to-compare .royaltickets-title').text(data.response);
                royaltickets_timeout = setTimeout(function(){
                    jQuery('.single-add-to-compare').removeClass('single-add-to-favorites-visible');
                    jQuery('#royaltickets-add-notification .fa-check').css('display', 'none');
                }, 5000);
            },
            error: function(data){
                //
                jQuery('#royaltickets-add-notification .fa-spinner').css('display', 'none');
                jQuery('#royaltickets-add-notification .fa-exclamation-triangle').css('display', 'inline-block');
            }
        };

        jQuery('#royaltickets-add-notification-form').ajaxSubmit( add_new_notification );

    });
    // End

    // Add New notification set
    jQuery('.delete-user-filter').on('click', function (e) {
        e.preventDefault();
        var dataId = $(this).attr('data-id');
        $.ajax({
            url: royalticketsSettings.royaltickets_ajaxurl,
            type: "POST",
            dataType: 'json',
            data: '&post_id=' + dataId + '&action=royaltickets_remove_notification_set',
            context: this,
            beforeSend: function (data) {
                jQuery('#user-filter-'+dataId).css('opacity', '.7');
            },
            success: function (data) {
                jQuery('#user-filter-'+dataId).remove();
            }
        });

    });
    // End

    // Update event agent
    jQuery('.select_event_agent').change(function(e){
        var royaltickets_timeout;
        var value_id = jQuery( this ).parent().find(".event-id").val();
        var update_agent = {
            type: "POST",
            dataType: 'json',
            beforeSubmit:  function(){
                jQuery('#update_event_agent_'+value_id+' .fa-exclamation-triangle').css('display', 'none');
                jQuery('#update_event_agent_'+value_id+' .fa-spinner').css('display', 'inline-block');
            },
            success: function(data){
                jQuery('#update_event_agent_'+value_id+' .fa-spinner').css('display', 'none');
                jQuery('#update_event_agent_'+value_id+' .fa-check').css('display', 'inline-block');
                clearTimeout(royaltickets_timeout);
                royaltickets_timeout = setTimeout(function(){
                    jQuery('#update_event_agent_'+value_id+' .fa-check').css('display', 'none');
                }, 5000);
            },
            error: function(data){
                jQuery('#update_event_agent_'+value_id+' .fa-spinner').css('display', 'none');
                jQuery('#update_event_agent_'+value_id+' .fa-exclamation-triangle').css('display', 'inline-block');
            }
        };

        $('#update_event_agent_'+value_id).ajaxSubmit( update_agent );

    });
    // End

    jQuery('.confirm-delete-event').on('click', function () {
        return confirm(royalticketsSettings.delete_event_text);
    });

    jQuery('#events-table .delete-event-dashboard').on('click', function () {
        return confirm(royalticketsSettings.delete_event_text);
    });

    jQuery('#tickets-table .delete-ticket-dashboard').on('click', function () {
        return confirm(royalticketsSettings.delete_ticket_text);
    });

    jQuery(".numericonly").keypress(function(event) {
        // Backspace, tab, enter, end, home, left, right
        // We don't support the del key in Opera because del == . == 46.
        var controlKeys = [8, 9, 13, 35, 36, 37, 39];
        // IE doesn't support indexOf
        var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
        // Some browsers just don't raise events for control keys. Easy.
        // e.g. Safari backspace.
        if (!event.which || // Control keys in most browsers. e.g. Firefox tab is 0
            (49 <= event.which && event.which <= 57) || // Always 1 through 9
            (48 == event.which && $(this).attr("value")) || // No 0 first digit
            isControlKey) { // Opera assigns values for control keys.
            return;
        } else {
            event.preventDefault();
        }
    });

    // Submit event function
    function royaltickets_ajax_submit_event() {

        $('#royaltickets_event_title').keypress(function() {
            jQuery("#royaltickets_submit_errors .error-title").remove();
            jQuery('#royaltickets_submit_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $(document).on('click', '#royaltickets_submit_event:not(.pressed)', function(e){
            e.preventDefault();
            jQuery('#royaltickets_submit_event .fa-spinner').css('display', 'inline-block');
            jQuery("#event_save_status").val("save");
            jQuery("#royaltickets_submit_event").addClass("pressed");
            royaltickets_fire_submit_event("save");
        });

        $(document).on('click', '#royaltickets_publish_event:not(.pressed)', function(e){
            e.preventDefault();
            jQuery('#royaltickets_publish_event .fa-spinner').css('display', 'inline-block');
            jQuery("#event_save_status").val("publish");
            jQuery("#royaltickets_publish_event").addClass("pressed");
            royaltickets_fire_submit_event("publish");
        });

        $(document).on('click', '#royaltickets_update_event:not(.pressed)', function(e){
            e.preventDefault();
            jQuery('#royaltickets_update_event .fa-spinner').css('display', 'inline-block');
            jQuery("#event_save_status").val("update");
            jQuery("#royaltickets_update_event").addClass("pressed");
            royaltickets_fire_submit_event("update");
        });

        $(document).on('click', '#royaltickets_publish_event_inactive', function(e){
            e.preventDefault();
        });

        function royaltickets_fire_submit_event( fn_status ) {

            //tinyMCE.triggerSave();
            
            var royaltickets_timeout;
            var submit_event = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#royaltickets_submit_errors').css('display', 'none');
                    jQuery('#royaltickets_submit_errors').empty();
                },
                success: function(data){

                    console.log(data.content_st);
                    //console.log(data.event_id);

                    jQuery("#royaltickets_submit_event").removeClass("pressed");
                    jQuery("#royaltickets_publish_event").removeClass("pressed");
                    jQuery("#royaltickets_update_event").removeClass("pressed");

                    jQuery('#royaltickets_submit_event .fa-spinner').css('display', 'none');
                    jQuery('#royaltickets_publish_event .fa-spinner').css('display', 'none');
                    jQuery('#royaltickets_update_event .fa-spinner').css('display', 'none');

                    if( fn_status == "update" ) {

                        jQuery('html, body').animate({scrollTop : 0},800);
                        clearTimeout(royaltickets_timeout);
                        jQuery('.single-add-to-compare').addClass('single-add-to-favorites-visible');
                        jQuery('.single-add-to-compare .royaltickets-title').text(royalticketsSettings.event_updated);
                        royaltickets_timeout = setTimeout(function(){
                            $('.single-add-to-compare').removeClass('single-add-to-favorites-visible');
                        }, 5000);
                        
                    } else {

                        if( typeof data.event_id != 'undefined' ) {
                            jQuery('#event_id').val(data.event_id)
                        }
                        if( typeof data.event_url != 'undefined' ) {
                            jQuery('#royaltickets_view_event').attr("href", data.event_url);
                            jQuery('#royaltickets_view_event').css("display", "inline-block");
                        }

                        if( data.status == 'success' ) {
                            if(typeof data.response != 'undefined') {
                                jQuery('html, body').animate({scrollTop : 0},800);
                                jQuery('#submit-event-confirmation-data h4').text(data.response);
                                jQuery("#submit-event-form").slideUp("slow", function() {
                                    jQuery("#submit-event-confirmation").slideDown("slow");
                                });
                            }
                        } else {
                            jQuery('html, body').animate({scrollTop : 0},800);
                            jQuery('#submit-event-confirmation-data h4').text(data.response);
                            jQuery("#submit-event-form").slideUp("slow", function() {
                                jQuery("#submit-event-confirmation").slideDown("slow");
                            });
                        }

                    }

                },
                error: function(data){

                    //console.log(data);

                    jQuery("#royaltickets_submit_event").removeClass("pressed");
                    jQuery("#royaltickets_publish_event").removeClass("pressed");
                    jQuery("#royaltickets_update_event").removeClass("pressed");

                    jQuery('#royaltickets_submit_event .fa-spinner').css('display', 'none');
                    jQuery('#royaltickets_publish_event .fa-spinner').css('display', 'none');
                    jQuery('#royaltickets_update_event .fa-spinner').css('display', 'none');

                    jQuery('html, body').animate({scrollTop : 0},800);
                    jQuery('#submit-event-confirmation-data h4').text("Something went wrong. Refresh and try again.");
                    jQuery("#submit-event-form").slideUp("slow", function() {
                        jQuery("#submit-event-confirmation").slideDown("slow");
                    });

                }
            };

            var errors = 0;

            var title = $("#royaltickets_event_title").val();

            if ( title.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_submit_errors .error-title").remove();
                jQuery("#royaltickets_submit_errors").append( '<div class="error-title"><span class="error-title">Error:</span> Title required.</div>' );
                jQuery('#royaltickets_submit_errors').css('display', 'inline-block');
                $('html, body').animate({
                    scrollTop: $("#royaltickets_submit_errors").offset().top - 100
                }, 200);
                jQuery('#royaltickets_submit_event .fa-spinner').css('display', 'none');
                jQuery('#royaltickets_publish_event .fa-spinner').css('display', 'none');
                jQuery('#royaltickets_update_event .fa-spinner').css('display', 'none');
                return;
            }

            if( errors == 0 ) {
                $('#submit-event-form').ajaxSubmit( submit_event );
            } else {
                return false;
            }

        };
    }
    // End

    // Submit event function
    function royaltickets_ajax_submit_event_front() {

        $('#royaltickets_event_title').keypress(function() {
            jQuery("#royaltickets_submit_errors .error-title").remove();
            jQuery('#royaltickets_submit_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $(document).on('click', '#royaltickets_submit_event_loggedout:not(.disabled)', function(e){
            e.preventDefault();
            royaltickets_fire_submit_event_front();
        });

        $(document).on('click', '#royaltickets_submit_event_loggedout.disabled', function(e){
            e.preventDefault();
        });

        $(document).on('click', '#royaltickets_publish_event_inactive', function(e){
            e.preventDefault();
        });

        function royaltickets_fire_submit_event_front() {

            //tinyMCE.triggerSave();
            
            var royaltickets_timeout;
            var submit_event = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#royaltickets_submit_errors').css('display', 'none');
                    jQuery('#royaltickets_submit_errors').empty();
                },
                success: function(data){

                    //console.log(data);

                    if( typeof data.event_id != 'undefined' ) {
                        jQuery('#event_id').val(data.event_id)
                    }
                    if( typeof data.event_url != 'undefined' ) {
                        jQuery('#royaltickets_view_event').attr("href", data.event_url);
                        jQuery('#royaltickets_view_event').css("display", "inline-block");
                    }

                    if( data.status == 'success' ) {
                        if(typeof data.response != 'undefined') {
                            jQuery('html, body').animate({scrollTop : 0},800);
                            jQuery('#submit-event-confirmation-data h4').text(data.response);
                            jQuery("#submit-event-form").slideUp("slow", function() {
                                jQuery("#submit-event-confirmation-front").slideDown("slow");
                            });
                        }
                    } else {
                        jQuery('html, body').animate({scrollTop : 0},800);
                        jQuery('#submit-event-confirmation-data h4').text(data.response);
                        jQuery("#submit-event-form").slideUp("slow", function() {
                            jQuery("#submit-event-confirmation-front").slideDown("slow");
                        });
                    }

                },
                error: function(data){

                    //console.log(data);

                    jQuery('html, body').animate({scrollTop : 0},800);
                    jQuery('#submit-event-confirmation-data h4').text("Something went wrong. Refresh and try again.");
                    jQuery("#submit-event-form").slideUp("slow", function() {
                        jQuery("#submit-event-confirmation-front").slideDown("slow");
                    });

                }
            };

            var errors = 0;

            var title = $("#royaltickets_event_title").val();

            if ( title.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_submit_errors .error-title").remove();
                jQuery("#royaltickets_submit_errors").append( '<div class="error-title"><span class="error-title">Error:</span> Title required.</div>' );
                jQuery('#royaltickets_submit_errors').css('display', 'inline-block');
                $('html, body').animate({
                    scrollTop: $("#royaltickets_submit_errors").offset().top - 100
                }, 200);
                return;
            }

            if( errors == 0 ) {
                $('#submit-event-form').ajaxSubmit( submit_event );
            } else {
                return false;
            }

        };
    }
    // End

    jQuery('#royaltickets_upload_images').on('click', '.deleteUploadedImages', function(e) {
        jQuery(this).parent().remove();
        jQuery('.tooltip').remove();
        jQuery('#my-account-form .uploadedImages').css("display", "inline-block");
    });

    function generate_ID() {

        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return Math.random().toString(36).substr(2, 9);

    };

    // Load Cover Image
    function readURLGallery(input) {
        if (input.files && input.files[0]) {

            jQuery(input.files).each(function () {

                var file = $(this);

                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        var idGen = generate_ID();

                        $('#up_images').append(
                            '<li id="royaltickets-gallery-image-' + idGen + '" class="col-md-4 myplugin-image-preview image-holder grabbable"><i class="fa fa-spinner fa-spin"></i><span class="makeItFeatured" data-id="" ><i class="fa fa-star-o" aria-hidden="true" data-toggle="tooltip" data-placement="top"  data-original-title="' + royalticketsSettings.make_featured_image_text + '"></i><i class="fa fa-star" aria-hidden="true" data-toggle="tooltip" data-placement="top"  data-original-title="' + royalticketsSettings.remove_featured_image_text + '"></i></span><span class="deleteUploadedImages" data-toggle="tooltip" data-placement="top"  data-original-title="' + royalticketsSettings.delete_image_text + '"><i class="fa fa-times" aria-hidden="true"></i></span><span class="image-holder"></span><input class="ft_event_images" type="hidden" name="ft_event_images[]" value=""></li>'
                        );

                        royaltickets_submit_gallery( file[0], idGen );

                    }

                }
                reader.readAsDataURL(file[0]);

            });

        }
    }
    $("#post_gallery").change(function(){
        readURLGallery(this);
    });

    function royaltickets_submit_gallery( image_src, idGen ) {

        var fd = new FormData();
        fd.append('image_src', image_src);
        fd.append('action', 'royaltickets_custom_submit_image_gallery');
        fd.append("file", image_src);

        $.ajax({
            type: 'POST',
            url: royalticketsSettings.royaltickets_ajaxurl,
            dataType: 'json',
            data: fd,
            contentType: false,
            processData: false,
            beforeSend: function(){
                //
                //console.log("begin upload");
                //jQuery("#image-gallery-" + idGen).addClass("ajax_loading");
                document.getElementById("post_gallery").value = "";
            },
            success: function (data) {
                //console.log("success")
                //console.log(data.image_url);
                jQuery("#royaltickets-gallery-image-" + idGen + " .ft_event_images").val(data.image_id);
                jQuery("#royaltickets-gallery-image-" + idGen + " .makeItFeatured").attr('data-id', data.image_id);
                jQuery("#royaltickets-gallery-image-" + idGen + " .image-holder").css('background-image', 'url(' + data.image_url + ')');
                //jQuery("#royaltickets-gallery-image-" + idGen).removeClass("ajax_loading");
                jQuery("#royaltickets-gallery-image-" + idGen).addClass("ajax_loaded");
            },
            error:  function (data) {
                console.log("error")
                //console.log(data);
            },
        });

    };

    if( jQuery("#up_images").exists() ) {

        jQuery('#up_images').sortable({
            placeholder: "col-md-4 image-drag-placeholder"
        });
        jQuery('#up_images').disableSelection();

    };

    // make it featured image
    jQuery('#royaltickets_upload_images').on('click', '.makeItFeatured', function(e) {
        if( jQuery(this).hasClass("featured")) {

            jQuery('#royaltickets_upload_images .makeItFeatured').removeClass("featured");
            jQuery('#royaltickets_event_featured_image').val('');

        } else {

            jQuery('#royaltickets_upload_images .makeItFeatured').removeClass("featured");
            jQuery(this).addClass("featured");
            var dataId = '';
            dataId = $(this).attr('data-id');
            jQuery('#royaltickets_event_featured_image').val(dataId);

        }
    });

    // Additional Details
    jQuery('.royaltickets_additional_details_wrapper').on('click', '.fa-plus-circle', function(e) {
        jQuery(this).parent().parent().remove();
    });

    jQuery('.royaltickets_new_additional_detail').on('click', '.fa-plus-circle', function(e) {
        jQuery('.royaltickets_additional_details_wrapper').append(
            '<div class="royaltickets_additional_details row"><div class="col-md-6"><label>Title</label><input type="text" name="detail-titles[]" value="" ></div><div class="col-md-6 close-holder"><label>Value</label><input type="text" name="detail-values[]" value="" ><i class="fa fa-plus-circle" aria-hidden="true"></i></div></div>'
        );
    });

    // Nearby Transport
    jQuery('.nearby-transport-holder').on('click', '.fa-plus-circle', function(e) {
        jQuery(this).parent().parent().remove();
    });

    jQuery('.royaltickets_new_nearby_transport').on('click', '.fa-plus-circle', function(e) {
        var length = jQuery(".nearby-transport-holder .nearby-transport-item").length;
        length++;
        jQuery('.nearby-transport-holder').append(
            '<div class="nearby-transport-item"><div class="col-md-6"><label>Name</label><input type="text" name="nearby-transport[' + length + '][name]" value="" ></div><div class="col-md-6 close-holder"><label>Distance</label><input type="text" name="nearby-transport[' + length + '][distance]" value="" ><i class="fa fa-plus-circle" aria-hidden="true"></i></div></div>'
        );
    });

    // Nearby Health
    jQuery('.nearby-health-holder').on('click', '.fa-plus-circle', function(e) {
        jQuery(this).parent().parent().remove();
    });

    jQuery('.royaltickets_new_nearby_health').on('click', '.fa-plus-circle', function(e) {
        var length = jQuery(".nearby-health-holder .nearby-health-item").length;
        length++;
        jQuery('.nearby-health-holder').append(
            '<div class="nearby-health-item"><div class="col-md-6"><label>Name</label><input type="text" name="nearby-health[' + length + '][name]" value="" ></div><div class="col-md-6 close-holder"><label>Distance</label><input type="text" name="nearby-health[' + length + '][distance]" value="" ><i class="fa fa-plus-circle" aria-hidden="true"></i></div></div>'
        );
    });

    // Nearby Education
    jQuery('.nearby-edu-holder').on('click', '.fa-plus-circle', function(e) {
        jQuery(this).parent().parent().remove();
    });

    jQuery('.royaltickets_new_nearby_edu').on('click', '.fa-plus-circle', function(e) {
        var length = jQuery(".nearby-edu-holder .nearby-edu-item").length;
        length++;
        jQuery('.nearby-edu-holder').append(
            '<div class="nearby-edu-item"><div class="col-md-6"><label>Name</label><input type="text" name="nearby-edu[' + length + '][name]" value="" ></div><div class="col-md-6 close-holder"><label>Distance</label><input type="text" name="nearby-edu[' + length + '][distance]" value="" ><i class="fa fa-plus-circle" aria-hidden="true"></i></div></div>'
        );
    });

    // New Floor Plan
    jQuery('.royaltickets_floors_wrapper').on('click', '.fa-plus-circle', function(e) {
        jQuery(this).parent().parent().remove();
    });

    jQuery('.royaltickets_new_floor').on('click', '.fa-plus-circle', function(e) {
        var length = jQuery(".royaltickets_floors_wrapper .royaltickets_event_floor").length;
        length++;
        jQuery('.royaltickets_floors_wrapper').append(
            '<div class="royaltickets_additional_details row royaltickets_event_floor"><div class="col-md-12"><label>Floor Name</label><input type="text" name="floor[' + length + '][ft_floor_plan_name]" value="" ><p class="description">Example: Ground Floor</p></div><div class="col-md-6"><label>Floor Price ( Only digits )</label><input type="text" name="floor[' + length + '][ft_floor_plan_price]" value="" ><p class="description">Example: 4000</p></div><div class="col-md-6"><label>Price Postfix</label><input type="text" name="floor[' + length + '][ft_floor_plan_price_postfix]" value="" ><p class="description">Example: Per Month</p></div><div class="col-md-6"><label>Floor Size ( Only digits )</label><input type="text" name="floor[' + length + '][ft_floor_plan_size]" value="" ><p class="description">Example: 2500</p></div><div class="col-md-6"><label>Size Postfix</label><input type="text" name="floor[' + length + '][ft_floor_plan_size_postfix]" value="" ><p class="description">Example: Sq Ft</p></div><div class="col-md-6"><label>Bedrooms</label><input type="text" name="floor[' + length + '][ft_floor_plan_bedrooms]" value="" ></div><div class="col-md-6"><label>Bathrooms</label><input type="text" name="floor[' + length + '][ft_floor_plan_bathrooms]" value="" ></div><div class="col-md-12"><label>Description</label><textarea cols="60" rows="3" name="floor[' + length + '][ft_floor_plan_descr]"></textarea></div><div class="col-md-6"><label>Floor Plan Image</label><div class="ft_floor_plan_image_holder"><img class="ft_floor_plan_image_src" src="" ></div><input type="hidden" class="ft_floor_plan_image" name="floor[' + length + '][ft_floor_plan_image]" value=""><ul class="floor_image row" id="up_images"></ul><p>The recommended minimum width is 810px and height is flexible.</p><button class="btn uploadedImages" type="button"><i class="fa fa-picture-o"></i>Upload Image<input type="file" class="input-text royaltickets-file-upload upload_floor_image" data-file_types="jpg|jpeg|gif|png" name="account_image" ></button><div class="royaltickets_event_floor_devider"></div></div></div>'
        );
    });

    // Delete floor
    jQuery('.royaltickets_floors_wrapper').on('click', '.deleteFloor', function(e) {
        $(this).parent().parent().remove();
    });

    // Floor plan image
    // Delete uploaded image
    jQuery('#royaltickets_floors_wrapper').on('click', '.deleteFloorImage', function(e) {
        $(this).parent().find(".ft_floor_plan_image").val('');
        $(this).parent().find(".ft_floor_plan_image_src").remove();
        $(this).parent().find(".uploadFloorImage").css("display", "inline-block");
        $(this).css("display", "none");
    });

    jQuery('#royaltickets_floors_wrapper').on('click', '.uploadFloorImage', function(e) {
        e.preventDefault();

        this_image_holder = $(this).parent().find(".ft_floor_plan_image_holder");
        this_image_val = $(this).parent().find(".ft_floor_plan_image");

        // If the uploader object has already been created, reopen the dialog
        if (image_custom_uploader_floor) {
            image_custom_uploader_floor.open();
            return;
        }

        // Extend the wp.media object
        image_custom_uploader_floor = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });

        // When a file is selected, grab the URL and set it as the text field's value
        image_custom_uploader_floor.on( 'select', function(){

            var attachments = image_custom_uploader_floor.state().get('selection').map( 

                function( attachment ) {

                    attachment.toJSON();
                    return attachment;

            });

            this_image_holder.html('<img class="ft_floor_plan_image_src" src="' + attachments[0].attributes.url + '" >');
            this_image_val.val(attachments[0].id);

        });

        $(this).parent().find(".deleteFloorImage").css("display", "inline-block");
        $(this).css("display", "none");

        //Open the uploader dialog
        image_custom_uploader_floor.open();
    });

    // Toggle submit event sections
    jQuery('#submit-event-form').on('click', '.royaltickets-accordion-header', function(e) {
        e.preventDefault();
        jQuery(this).parent().toggleClass("active");
    });

    // Toggle submit event sections Expand All
    jQuery('#submit-event-form').on('click', '#royaltickets-submit-form-expand', function(e) {
        e.preventDefault();
        jQuery('#submit-event-form .royaltickets-accordion-section').addClass("active");
    });

    jQuery('#submit-event-form').on('click', '#royaltickets-submit-form-collapse', function(e) {
        e.preventDefault();
        jQuery('#submit-event-form .royaltickets-accordion-section').removeClass("active");
    });

    //
    function royaltickets_geo_code_location() {

        // Location map
        if( jQuery("#royaltickets_event_map").exists() ) {

            var geocoder;
            var map;
            var marker;

            var geocoder = new google.maps.Geocoder();

            function geocodePosition(pos) {
                geocoder.geocode({
                    latLng: pos
                }, function(responses) {
                    if (responses && responses.length > 0) {
                        updateMarkerAddress(responses[0].formatted_address);
                    } else {
                        updateMarkerAddress('Cannot determine address at this location.');
                    }
                });
            }

            function updateMarkerPosition(latLng) {
                jQuery('#royaltickets_event_latitude').val(latLng.lat());
                jQuery('#royaltickets_event_longitude').val(latLng.lng());
            }

            function updateMarkerAddress(str) {
                jQuery('#ft_event_address').val(str);
            }

            function initialize() {

                var latlng = new google.maps.LatLng(jQuery("#royaltickets_event_latitude").val(), jQuery("#royaltickets_event_longitude").val());
                var mapOptions = {
                    zoom: 16,
                    center: latlng
                }

                map = new google.maps.Map(document.getElementById('royaltickets_event_map'), mapOptions);

                geocoder = new google.maps.Geocoder();

                marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    draggable: true
                });

                // Add dragging event listeners.
                google.maps.event.addListener(marker, 'dragstart', function() {
                    updateMarkerAddress('Dragging...');
                });
              
                google.maps.event.addListener(marker, 'drag', function() {
                    updateMarkerPosition(marker.getPosition());
                });
              
                google.maps.event.addListener(marker, 'dragend', function() {
                    geocodePosition(marker.getPosition());
                });

            }

            google.maps.event.addDomListener(window, 'load', initialize);
                     
            initialize();
                      
            jQuery(function() {
                
                jQuery("#ft_event_address").autocomplete({
                    //This bit uses the geocoder to fetch address values
                    source: function(request, response) {
                        geocoder.geocode( {'address': request.term }, function(results, status) {
                            response(jQuery.map(results, function(item) {
                                return {
                                    label:  item.formatted_address,
                                    value: item.formatted_address,
                                    latitude: item.geometry.location.lat(),
                                    longitude: item.geometry.location.lng()
                                }
                            }));
                        })
                    },
                    //This bit is executed upon selection of an address
                    select: function(event, ui) {
                        jQuery("#royaltickets_event_latitude").val(ui.item.latitude);
                        jQuery("#royaltickets_event_longitude").val(ui.item.longitude);

                        var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);

                        marker.setPosition(location);
                        map.setZoom(16);
                        map.setCenter(location);

                    }
                });
            });
              
            //Add listener to marker for reverse geocoding
            google.maps.event.addListener(marker, 'drag', function() {
                geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            jQuery('#ft_event_address').val(results[0].formatted_address);
                            jQuery('#royaltickets_event_latitude').val(marker.getPosition().lat());
                            jQuery('#royaltickets_event_longitude').val(marker.getPosition().lng());
                        }
                    }
                });
            });
            
        };
        // End location map

    }

    function validateEmail(email) { 
        // http://stackoverflow.com/a/46181/11236         
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /* Contact Agency */
    /*-----------------------------------------------------------------------------------*/
    jQuery(document).on('click', '.agency-contact', function(e){
        e.preventDefault();
        jQuery("#agency-overlay #leave_review").css('display', 'none');
        jQuery("#agency-overlay #send_message").css('display', 'inline-block');
        jQuery("#agency-overlay").addClass('open');
        jQuery('html, body').animate({scrollTop : 0},800);
        return false;
    });

    /* Submit Agency Review */
    /*-----------------------------------------------------------------------------------*/
    jQuery(document).on('click', '.agency-submit-review', function(e){
        e.preventDefault();
        jQuery("#agency-overlay #leave_review").css('display', 'inline-block');
        jQuery("#agency-overlay #send_message").css('display', 'none');
        jQuery("#agency-overlay").addClass('open');
        jQuery('html, body').animate({scrollTop : 0},800);
        return false;
    });

    /* Login/Register & Agent Contact Modal Form */
    /*-----------------------------------------------------------------------------------*/

    jQuery(document).on('click', '.open-login-popup', function(e){
        e.preventDefault();
        jQuery("#overlay").addClass('open');
        jQuery('html, body').animate({scrollTop : 0},800);
        return false;
    });

    jQuery(document).on('click', '.menu-login-register-button a.login-button', function(e){
        e.preventDefault();
        jQuery("#overlay").addClass('open');
        jQuery('html, body').animate({scrollTop : 0},800);
        return false;
    });

    jQuery(document).on('click', '.close', function(e){
        e.preventDefault();
        jQuery("#overlay").removeClass('open');
        jQuery("#agency-overlay").removeClass('open');
    });

    jQuery(document).on('click', '.royaltickets-registration', function(e){
        e.preventDefault();
        jQuery("#login").slideUp("fast", function() {
            jQuery("#register").slideDown("fast");
        });
    });

    jQuery(document).on('click', '.royaltickets-back-login', function(e){
        e.preventDefault();
        jQuery("#lost-password").slideUp("fast", function() {
            jQuery("#login").slideDown("fast");
        });
    });

    jQuery(document).on('click', '.royaltickets-lost-password', function(e){
        e.preventDefault();
        jQuery("#login").slideUp("fast", function() {
            jQuery("#lost-password").slideDown("fast");
        });
    });

    jQuery(document).on('click', '.royaltickets-login', function(e){
        e.preventDefault();
        jQuery("#register").slideUp("fast", function() {
            jQuery("#login").slideDown("fast");
        });
    });
    // End

    // Login function
    function royaltickets_ajax_login() {

        $('#royaltickets_login_form #royaltickets_user_login').keypress(function() {
            jQuery("#royaltickets_account_login_errors .error-username").remove();
            jQuery('#royaltickets_account_login_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_login_form #royaltickets_user_pass').keypress(function() {
            jQuery("#royaltickets_account_login_errors .error-password").remove();
            jQuery('#royaltickets_account_login_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $(document).on('click', '#royaltickets_login_submit', function(e){
            e.preventDefault();
            var login_user = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#login-progress').css('display', 'inline-block');
                    jQuery('#royaltickets_account_login_errors').css('display', 'none');
                    jQuery('#royaltickets_account_login_errors').empty();
                },
                success: function(data){
                    if( data.status == 'success' ) {
                        if( data.redirect.length === 0  ) {
                            window.location.reload(true);
                        } else {
                            window.location.replace( data.redirect );
                        }
                    } else {
                        if( data.error_user != '' ) {
                            jQuery("#royaltickets_account_login_errors").append( data.error_user );
                            jQuery('#royaltickets_account_login_errors').css('display', 'inline-block');
                        }
                        if( data.error_password != '' ) {
                            jQuery("#royaltickets_account_login_errors").append( data.error_password );
                            jQuery('#royaltickets_account_login_errors').css('display', 'inline-block');
                        }
                        jQuery('#login-progress').css('display', 'none');
                    }
                },
                error: function(data){
                    if( data.error_default != '' ) {
                        jQuery("#royaltickets_account_login_errors").html( data.error_default );
                        jQuery('#royaltickets_account_login_errors').css('display', 'inline-block');
                        jQuery('#login-progress').css('display', 'none');
                    }
                    jQuery('#login-progress').css('display', 'none');
                }
            };

            var errors = 0;

            var username = $("#royaltickets_login_form #royaltickets_user_login").val();
            var password = $("#royaltickets_login_form #royaltickets_user_pass").val();

            if ( username.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_account_login_errors .error-username").remove();
                jQuery("#royaltickets_account_login_errors").append( '<div class="error-username"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.username_required+'.</div>' );
                jQuery('#royaltickets_account_login_errors').css('display', 'inline-block');
                return;
            }

            if ( password.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_account_login_errors .error-password").remove();
                jQuery("#royaltickets_account_login_errors").append( '<div class="error-password"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.password_required+'.</div>' );
                jQuery('#royaltickets_account_login_errors').css('display', 'inline-block');
                return;
            }

            if( errors == 0 ) {
                $('#royaltickets_login_form').ajaxSubmit( login_user );
            } else {
                return false;
            }

        });
    }
    // End

    // Register function
    function royaltickets_ajax_register() {

        $('#royaltickets_registration_form #royaltickets_user_login').keypress(function() {
            jQuery("#royaltickets_account_register_errors .error-username").remove();
            jQuery('#royaltickets_account_register_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_registration_form #royaltickets_user_email').keypress(function() {
            jQuery("#royaltickets_account_register_errors .error-email").remove();
            jQuery('#royaltickets_account_register_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_registration_form #password').keypress(function() {
            jQuery("#royaltickets_account_register_errors .error-password").remove();
            jQuery('#royaltickets_account_register_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_registration_form #password_again').keypress(function() {
            jQuery("#royaltickets_account_register_errors .error-repeat-password").remove();
            jQuery('#royaltickets_account_register_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $(document).on('click', '#royaltickets_register_submit:not(.disabled)', function(e){
            e.preventDefault();
            var register_user = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#register-progress').css('display', 'inline-block');
                    jQuery('#royaltickets_account_register_errors').css('display', 'none');
                    jQuery('#royaltickets_account_register_errors').empty();
                },
                success: function(data){
                    console.log(data);
                    if( data.status == 'success' ) {
                        if( data.redirect.length === 0  ) {
                            window.location.reload(true);
                        } else {
                            window.location.replace( data.redirect );
                        }
                    } else {
                        if( data.error_user != '' ) {
                            jQuery("#royaltickets_account_register_errors").append( data.error_user );
                            jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                        }
                        if( data.error_email != '' ) {
                            jQuery("#royaltickets_account_register_errors").append( data.error_email );
                            jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                        }
                        jQuery('#register-progress').css('display', 'none');
                    }
                },
                error: function(data){
                    console.log(data);
                    if( data.error_default != '' ) {
                        jQuery("#royaltickets_account_register_errors").html( data.error_default );
                        jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                        jQuery('#register-progress').css('display', 'none');
                    }
                    jQuery('#register-progress').css('display', 'none');
                }
            };

            var errors = 0;

            var username = $("#royaltickets_registration_form #royaltickets_user_login").val();
            var password = $("#royaltickets_registration_form #royaltickets_user_pass").val();
            var confirmPassword = $("#royaltickets_registration_form #password_again").val();

            if ( username.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_account_register_errors .error-username").remove();
                jQuery("#royaltickets_account_register_errors").append( '<div class="error-username"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.username_required+'.</div>' );
                jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                return;
            }

            if ( ( $('#royaltickets_registration_form #royaltickets_user_email').length ) && ! validateEmail( $('#royaltickets_registration_form #royaltickets_user_email').val() ) ) { // Validate email
                errors = 1;
                jQuery("#royaltickets_account_register_errors .error-email").remove();
                jQuery("#royaltickets_account_register_errors").append( '<div class="error-email"><span class="error-title">'+royalticketsSettings.error+':</span> Email required.</div>' );
                jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                return;
            }

            if ( password.length === 0 ) { // Validate repeat password
                errors = 1;
                jQuery("#royaltickets_account_register_errors .error-password").remove();
                jQuery("#royaltickets_account_register_errors").append( '<div class="error-password"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.password_required+'.</div>' );
                jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                return;
            }

            if ( password != confirmPassword ) { // Validate repeat password
                errors = 1;
                jQuery("#royaltickets_account_register_errors .error-repeat-password").remove();
                jQuery("#royaltickets_account_register_errors").append( "<div class='error-repeat-password'><span class='error-title'>"+royalticketsSettings.error+":</span> "+royalticketsSettings.password_doesnt_match+".</div>" );
                jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                return;
            }

            if( errors == 0 && !jQuery(this).hasClass('disabled') ) {
                $('#royaltickets_registration_form').ajaxSubmit( register_user );
            } else {
                return false;
            }

        });

        $(document).on('click', '#royaltickets_register_widget_submit:not(.disabled)', function(e){
            e.preventDefault();
            var register_user = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#register-progress-widget').css('display', 'inline-block');
                    jQuery('#royaltickets_account_register_errors_widget').css('display', 'none');
                    jQuery('#royaltickets_account_register_errors_widget').empty();
                },
                success: function(data){
                    console.log(data);
                    if( data.status == 'success' ) {
                        if( data.redirect.length === 0  ) {
                            window.location.reload(true);
                        } else {
                            window.location.replace( data.redirect );
                        }
                    } else {
                        if( data.error_user != '' ) {
                            jQuery("#royaltickets_account_register_errors_widget").append( data.error_user );
                            jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                        }
                        if( data.error_email != '' ) {
                            jQuery("#royaltickets_account_register_errors_widget").append( data.error_email );
                            jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                        }
                        jQuery('#register-progress-widget').css('display', 'none');
                    }
                },
                error: function(data){
                    console.log(data);
                    if( data.error_default != '' ) {
                        jQuery("#royaltickets_account_register_errors_widget").html( data.error_default );
                        jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                        jQuery('#register-progress-widget').css('display', 'none');
                    }
                    jQuery('#register-progress-widget').css('display', 'none');
                }
            };

            var errors = 0;

            var username = $("#royaltickets_registration_form_widget #royaltickets_user_login_widget").val();
            var password = $("#royaltickets_registration_form_widget #royaltickets_user_pass_widget").val();
            var confirmPassword = $("#royaltickets_registration_form_widget #password_again_widget").val();

            if ( username.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-username").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( '<div class="error-username"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.username_required+'.</div>' );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                return;
            }

            if ( ( $('#royaltickets_registration_form_widget #royaltickets_user_email_widget').length ) && ! validateEmail( $('#royaltickets_registration_form_widget #royaltickets_user_email_widget').val() ) ) { // Validate email
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-email").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( '<div class="error-email"><span class="error-title">'+royalticketsSettings.error+':</span> Email required.</div>' );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                return;
            }

            if ( password.length === 0 ) { // Validate repeat password
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-password").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( '<div class="error-password"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.password_required+'.</div>' );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                return;
            }

            if ( password != confirmPassword ) { // Validate repeat password
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-repeat-password").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( "<div class='error-repeat-password'><span class='error-title'>"+royalticketsSettings.error+":</span> "+royalticketsSettings.password_doesnt_match+".</div>" );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                return;
            }

            if( errors == 0 && !jQuery(this).hasClass('disabled') ) {
                $('#royaltickets_registration_form_widget').ajaxSubmit( register_user );
            } else {
                return false;
            }

        });

    }
    // End

    // Submit Review
    function royaltickets_submit_review() {

        $(document).on('click', '#royaltickets_submit_review', function(e){
            e.preventDefault();

            $('#leave_review #royaltickets_user_name_review').removeClass('error');
            $('#leave_review #royaltickets_title').removeClass('error');
            $('#leave_review #review_desc').removeClass('error');

            var action = 'royaltickets_submit_review';
            var agency = $('#leave_review #royaltickets_id').val();
            var name = $('#leave_review #royaltickets_user_name_review').val();
            var title = $('#leave_review #royaltickets_title').val();
            var review = $('#leave_review #review_desc').val();
            var rating = $('input[name=rating]:checked', '#leave_review  .leave-rating').val();

            if( name.length === 0 ) {
                $('#leave_review #royaltickets_user_name_review').addClass('error');
                return false;
            }

            if( title.length === 0 ) {
                $('#leave_review #royaltickets_title').addClass('error');
                return false;
            }

            if( review.length === 0 ) {
                $('#leave_review #review_desc').addClass('error');
                return false;
            }

            console.log(rating);

            jQuery('#royaltickets_submit_review .fa-spinner').css('display', 'inline-block');

            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                url: royalticketsSettings.royaltickets_ajaxurl,
                data: {
                    'action': action,
                    'agency': agency,
                    'name': name,
                    'title': title,
                    'review': review,
                    'rating': rating,
                },
                success: function (data) {
                    //console.log(data);
                    jQuery('#royaltickets_submit_review .fa-spinner').css('display', 'none');
                    jQuery("#agency-overlay").removeClass('open');
                }
            });

        });
    }
    // End

    // Login function
    function royaltickets_ajax_login_widget() {

        $('#royaltickets_login_form_widget #royaltickets_user_login_widget').keypress(function() {
            jQuery("#royaltickets_account_login_errors_widget .error-username").remove();
            jQuery('#royaltickets_account_login_errors_widget:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_login_form_widget #royaltickets_user_pass_widget').keypress(function() {
            jQuery("#royaltickets_account_login_errors_widget .error-password").remove();
            jQuery('#royaltickets_account_login_errors_widget:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $(document).on('click', '#royaltickets_login_submit_widget', function(e){
            e.preventDefault();
            var login_user = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#login-progress').css('display', 'inline-block');
                    jQuery('#royaltickets_account_login_errors_widget').css('display', 'none');
                    jQuery('#royaltickets_account_login_errors_widget').empty();
                    jQuery(".submit-login-block").addClass("deactivated");
                },
                success: function(data){
                    if( data.status == 'success' ) {
                        if( jQuery(".submit-login-block").exists()) {
                            jQuery(".submit-login-block .div-to-load").html( data.html );
                        }
                        jQuery(".submit-login-block").removeClass("deactivated");
                        jQuery("#royaltickets_submit_event_loggedout").addClass("disabled");
                    } else {
                        if( data.error_user != '' ) {
                            jQuery("#royaltickets_account_login_errors_widget").append( data.error_user );
                            jQuery('#royaltickets_account_login_errors_widget').css('display', 'inline-block');
                        }
                        if( data.error_password != '' ) {
                            jQuery("#royaltickets_account_login_errors_widget").append( data.error_password );
                            jQuery('#royaltickets_account_login_errors_widget').css('display', 'inline-block');
                        }
                        jQuery('#login-progress').css('display', 'none');
                        jQuery(".submit-login-block").removeClass("deactivated");
                    }
                },
                error: function(data){
                    console.log(data);
                    if( data.error_default != '' ) {
                        jQuery("#royaltickets_account_login_errors_widget").html( data.error_default );
                        jQuery('#royaltickets_account_login_errors_widget').css('display', 'inline-block');
                        jQuery('#login-progress').css('display', 'none');
                    }
                    jQuery('#login-progress').css('display', 'none');
                    jQuery(".submit-login-block").removeClass("deactivated");
                }
            };

            var errors = 0;

            var username = $("#royaltickets_login_form_widget #royaltickets_user_login_widget").val();
            var password = $("#royaltickets_login_form_widget #royaltickets_user_pass_widget").val();

            if ( username.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_account_login_errors_widget .error-username").remove();
                jQuery("#royaltickets_account_login_errors_widget").append( '<div class="error-username"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.username_required+'.</div>' );
                jQuery('#royaltickets_account_login_errors_widget').css('display', 'inline-block');
                jQuery(".submit-login-block").removeClass("deactivated");
                return;
            }

            if ( password.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_account_login_errors_widget .error-password").remove();
                jQuery("#royaltickets_account_login_errors_widget").append( '<div class="error-password"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.password_required+'.</div>' );
                jQuery('#royaltickets_account_login_errors_widget').css('display', 'inline-block');
                jQuery(".submit-login-block").removeClass("deactivated");
                return;
            }

            if( errors == 0 ) {
                $('#royaltickets_login_form_widget').ajaxSubmit( login_user );
            } else {
                return false;
            }

        });
    }
    // End

    // Register function
    function royaltickets_ajax_register_widget() {

        $('#royaltickets_registration_form_widget #royaltickets_user_login_register').keypress(function() {
            jQuery("#royaltickets_account_register_errors_widget .error-username").remove();
            jQuery('#royaltickets_account_register_errors_widget:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_registration_form_widget #royaltickets_user_email_register').keypress(function() {
            jQuery("#royaltickets_account_register_errors_widget .error-email").remove();
            jQuery('#royaltickets_account_register_errors_widget:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_registration_form_widget #password_register').keypress(function() {
            jQuery("#royaltickets_account_register_errors_widget .error-password").remove();
            jQuery('#royaltickets_account_register_errors_widget:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $('#royaltickets_registration_form_widget #password_again_register').keypress(function() {
            jQuery("#royaltickets_account_register_error_widgets .error-repeat-password").remove();
            jQuery('#royaltickets_account_register_errors_widget:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $(document).on('click', '#royaltickets_register_submit_widget', function(e){
            e.preventDefault();
            var register_user = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#register-progress').css('display', 'inline-block');
                    jQuery('#royaltickets_account_register_errors_widget').css('display', 'none');
                    jQuery('#royaltickets_account_register_errors_widget').empty();
                    jQuery(".submit-login-block").addClass("deactivated");
                },
                success: function(data){
                    if( data.status == 'success' ) {
                        if( jQuery(".submit-login-block").exists()) {
                            jQuery(".submit-login-block .div-to-load").html( data.html );
                        }
                        jQuery(".submit-login-block").removeClass("deactivated");
                        jQuery("#royaltickets_submit_event_loggedout").addClass("disabled");
                    } else {
                        if( data.error_user != '' ) {
                            jQuery("#royaltickets_account_register_errors").append( data.error_user );
                            jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                        }
                        if( data.error_email != '' ) {
                            jQuery("#royaltickets_account_register_errors").append( data.error_email );
                            jQuery('#royaltickets_account_register_errors').css('display', 'inline-block');
                        }
                        jQuery('#register-progress').css('display', 'none');
                        jQuery(".submit-login-block").removeClass("deactivated");
                    }
                },
                error: function(data){
                    if( data.error_default != '' ) {
                        jQuery("#royaltickets_account_register_errors_widget").html( data.error_default );
                        jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                        jQuery('#register-progress').css('display', 'none');
                    }
                    jQuery('#register-progress').css('display', 'none');
                    jQuery(".submit-login-block").removeClass("deactivated");
                }
            };

            var errors = 0;

            var username = $("#royaltickets_registration_form_widget #royaltickets_user_login_register").val();
            var password = $("#royaltickets_registration_form_widget #password_register").val();
            var confirmPassword = $("#royaltickets_registration_form_widget #password_again_register").val();

            if ( username.length === 0 ) {
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-username").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( '<div class="error-username"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.username_required+'.</div>' );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                jQuery(".submit-login-block").removeClass("deactivated");
                return;
            }

            if ( ( $('#royaltickets_registration_form_widget #royaltickets_user_email_register').length ) && ! validateEmail( $('#royaltickets_registration_form_widget #royaltickets_user_email_register').val() ) ) { // Validate email
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-email").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( '<div class="error-email"><span class="error-title">'+royalticketsSettings.error+':</span> Email required.</div>' );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                jQuery(".submit-login-block").removeClass("deactivated");
                return;
            }

            if ( password.length === 0 ) { // Validate repeat password
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-password").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( '<div class="error-password"><span class="error-title">'+royalticketsSettings.error+':</span> '+royalticketsSettings.password_required+'.</div>' );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                jQuery(".submit-login-block").removeClass("deactivated");
                return;
            }

            if ( password != confirmPassword ) { // Validate repeat password
                errors = 1;
                jQuery("#royaltickets_account_register_errors_widget .error-repeat-password").remove();
                jQuery("#royaltickets_account_register_errors_widget").append( "<div class='error-repeat-password'><span class='error-title'>"+royalticketsSettings.error+":</span> "+royalticketsSettings.password_doesnt_match+".</div>" );
                jQuery('#royaltickets_account_register_errors_widget').css('display', 'inline-block');
                jQuery(".submit-login-block").removeClass("deactivated");
                return;
            }

            if( errors == 0 && !jQuery(this).hasClass('disabled') ) {
                $('#royaltickets_registration_form_widget').ajaxSubmit( register_user );
            } else {
                return false;
            }

        });
    }
    // End

    // Reset Password function
    function royaltickets_ajax_reset() {

        $('#lostpasswordform #user_login').keypress(function() {
            jQuery("#royaltickets_account_reset_errors .error-email").remove();
            jQuery('#royaltickets_account_reset_errors:empty').css('display', 'none');
            jQuery(this).focus();
        });

        $(document).on('click', '#royaltickets_reset_submit', function(e){
            e.preventDefault();
            var login_reset = {
                type: "POST",
                dataType: 'json',
                beforeSubmit:  function(){
                    jQuery('#reset-progress').css('display', 'inline-block');
                    jQuery('#royaltickets_account_reset_errors').css('display', 'none');
                    jQuery('#royaltickets_account_reset_errors').empty();
                },
                success: function(data){
                    if( data.status == 'success' ) {
                        jQuery("#royaltickets_account_reset_errors").append( data.success );
                        jQuery('#royaltickets_account_reset_errors').css('display', 'inline-block');
                        jQuery('#reset-progress').css('display', 'none');
                    } else {
                        if( data.error_user != '' ) {
                            jQuery("#royaltickets_account_reset_errors").append( data.error_user );
                            jQuery('#royaltickets_account_reset_errors').css('display', 'inline-block');
                        }
                        jQuery('#reset-progress').css('display', 'none');
                    }
                },
                error: function(data){
                    if( data.error_default != '' ) {
                        jQuery("#royaltickets_account_reset_errors").html( data.error_default );
                        jQuery('#royaltickets_account_reset_errors').css('display', 'inline-block');
                        jQuery('#reset-progress').css('display', 'none');
                    }
                    jQuery('#reset-progress').css('display', 'none');
                }
            };

            var errors = 0;

            if ( ( $('#lostpasswordform #user_login').length ) && ! validateEmail( $('#lostpasswordform #user_login').val() ) ) { // Validate email
                errors = 1;
                jQuery("#royaltickets_account_reset_errors .error-email").remove();
                jQuery("#royaltickets_account_reset_errors").append( '<div class="error-email"><span class="error-title">'+royalticketsSettings.error+':</span> Email required.</div>' );
                jQuery('#royaltickets_account_reset_errors').css('display', 'inline-block');
                return;
            }

            if( errors == 0 ) {
                $('#lostpasswordform').ajaxSubmit( login_reset );
            } else {
                return false;
            }

        });
    }
    // End

    // color tooltips
  	jQuery(function () {
    	jQuery('[data-toggle="tooltip"]').tooltip({container: 'body'});
  	});

    // Add to Favorites function
    function royaltickets_ajax_add_to_favorites() {
        $(document).on('click', '.add-to-favorites', function(e){
            e.preventDefault();
            var dataId = $(this).attr('data-id');
            var userId = $(this).attr('user-id');
            var dataAction = $(this).attr('data-action');
            if(typeof dataAction == 'undefined') {
                dataAction = 'add';
            }
            var royaltickets_timeout;
            var $block_this = $(".properties-list-wrapper").find("[data-id='" + dataId + "']");
            var $block_grid = $block_this.find(".royaltickets-events-block");

            if( dataAction == "login" ) {
                jQuery("#overlay").addClass('open');
                jQuery('html, body').animate({scrollTop : 0},800);
            } else {
                if(typeof dataId != 'undefined') {
                    $.ajax({
                        url: royalticketsSettings.royaltickets_ajaxurl,
                        type: "POST",
                        dataType: 'json',
                        data: {
                            'action': 'royaltickets_ajax_add_to_fav',
                            'post_id': dataId,
                            'user_id': userId,
                            'post_action': dataAction,
                        },
                        context: this,
                        beforeSend: function (data) {
                            $(this).addClass('disabled');
                            clearTimeout(royaltickets_timeout);
                        },
                        success: function (data) {
                            //console.log(data);
                            $(this).removeClass('disabled');
                            if(data.status != 'danger') {
                                if (dataAction == 'remove') {

                                    $(this).removeClass('remove');
                                    $(this).attr('data-action', 'add');
                                    $block_grid.find('.add-to-favorites').removeClass('remove');
                                    $block_grid.find('.add-to-favorites').attr('data-action', 'add');
                                    if( jQuery("#my-favorites-page").exists() ) {
                                        jQuery("#my-favorites-page .event-item-data[data-id="+dataId+"]").remove();
                                    }

                                    $("#favorite-event-basket #favorite-event-" + dataId).fadeOut(200, function(){
                                        jQuery("#favorite-event-basket #favorite-event-" + dataId).remove();
                                    });

                                } else {

                                    $(this).addClass('remove');
                                    $(this).attr('data-action', 'remove');

                                    jQuery("#favorite-event-basket .row").prepend('<div id="favorite-event-' + dataId + '" class="col-12 royaltickets-event-grid-block mb-30"></div>');
                                    $block_grid.clone().appendTo("#favorite-event-" + dataId);
                                    $("#favorite-event-" + dataId + " .royaltickets-events-block").not(':first').remove();

                                    $('.favorite-panel').addClass('panel-open');
                                    $('.favorite-mask').fadeIn(200);
                                    $('body').css('overflow', 'hidden');

                                }
                            }
                        },
                        error: function (data) {
                            //console.log(data);
                        }
                    });
                }
            }
        });

        var royaltickets_timeout;

    }
    // End

  	if( jQuery("#royaltickets-page-no-footer").exists() ) {

  		jQuery(".main-wrapper").addClass("page-no-footer");
  		
  	}

  	if( jQuery(".main-menu").exists()) {

  		jQuery('.main-menu .children').each(function(i, ojb) {
	        jQuery(this).removeClass("children").addClass("sub-menu");
	    });
  		
  	}

  	if( jQuery("#royaltickets-fullscreen-menu").exists() ) {

  		// Toggle mobile-menu
		jQuery("#fullscreen-menu").on("click", function(){
			if (jQuery("#royaltickets-fullscreen-menu").hasClass("modal-active")) {
				jQuery("#royaltickets-fullscreen-menu").removeClass("modal-active");
			} else {
				jQuery("#royaltickets-fullscreen-menu").addClass("modal-active");
			}
			return false;
		});

		jQuery("#fullscreen-menu-close").on("click", function(){
			if (jQuery("#royaltickets-fullscreen-menu").hasClass("modal-active")) {
				jQuery("#royaltickets-fullscreen-menu").removeClass("modal-active");
			} else {
				jQuery("#royaltickets-fullscreen-menu").addClass("modal-active");
			}
			return false;
		});

	  	jQuery('#royaltickets-fullscreen-menu li.menu-item-has-children > a').each(function(i, ojb) {
	        jQuery(this).addClass('main-has-submenu');
	    });

	    jQuery('#royaltickets-fullscreen-menu ul.sub-menu li.menu-item-has-children > a').each(function(i, ojb) {
	        if ( jQuery(this).hasClass('main-has-submenu') ) {
	            jQuery(this).removeClass('main-has-submenu').addClass('child-has-submenu');
	        } else {
	            jQuery(this).addClass('child-has-submenu');
	        }
	    });

	    jQuery('#royaltickets-fullscreen-menu li.page_item_has_children > a').each(function(i, ojb) {
	        jQuery(this).addClass('main-has-submenu');
	    });

	    jQuery('#royaltickets-fullscreen-menu ul.children li.page_item_has_children > a').each(function(i, ojb) {
	        if ( jQuery(this).hasClass('main-has-submenu') ) {
	            jQuery(this).removeClass('main-has-submenu').addClass('child-has-submenu');
	        } else {
	            jQuery(this).addClass('child-has-submenu');
	        }
	    });

	    jQuery("#royaltickets-fullscreen-menu li a.main-has-submenu").append("<i class='fa fa-angle-down'></i>");
	    jQuery("#royaltickets-fullscreen-menu li a.child-has-submenu").append("<i class='fa fa-angle-down'></i>");

	    jQuery("#royaltickets-fullscreen-menu li a.main-has-submenu").parent().parent().find('ul.sub-menu').prepend("<li><a class='back-sub-menu' href='#'><i class='fa fa-angle-double-up' aria-hidden='true'></i></a></li>");
	    jQuery("#royaltickets-fullscreen-menu li a.main-has-submenu").parent().parent().find('ul.children').prepend("<li><a class='back-sub-menu' href='#'><i class='fa fa-angle-double-up' aria-hidden='true'></i></a></li>");

	}

	if( jQuery(".royaltickets-search-card-list").exists() ) {
		$(".royaltickets-search-card-list").each(function() {
		    $(this).find(".royaltickets-magazine-image-card").css( "padding-bottom", $(this).find(".royaltickets-search-card-body").height() + 60 );
		});
	}


  	if( jQuery(".royaltickets-gallery-hide-footer").exists() ) {
  		jQuery(".royaltickets-page-footer").css("display", "none");
  	}

  	// Tabs
  	if( jQuery(".royaltickets-tabs").exists() ) {

  		var tabs = $('.royaltickets-tabs');
	
		tabs.each(function(){

			var tab = $(this);
			var tabContentWrapper = tab.find('.content-wrapper');

			$(this).find("ul.cd-tabs-navigation li a").on("click", function(){
				var selectedTab = $(this).data('content');
				tab.find("ul.cd-tabs-navigation li a").removeClass("selected");
				$(this).addClass("selected");
				tabContentWrapper.find(".section-topline").removeClass("selected");
				tabContentWrapper.find('#'+selectedTab).addClass("selected");

			});

		});

  	}

  	// Only for demo
  	// Remove language links
  	if( jQuery(".menu-item-language").exists() ) {
  		$(".menu-item-language a").each(function() {
		    $(this).attr("href", "#");
		});
  	}
  	// End 

  	$(".video-play-icon").on("click", function(){
		$(this).closest(".video-cover").addClass("reveal-video");
	});

  	if( jQuery("#change-color").exists() ) {
  		//
  	} else {
  		$("#main-color-container").remove();
  	}

  	if( jQuery(".royaltickets-accordion").exists() ) {
  		$("ul.royaltickets-accordion li h4").on("click", function(){
  			if($(this).parent().hasClass("active")) {
  				var thisHasClass = 1;
  			} else {
  				var thisHasClass = 0;
  			}
  			$(this).parent().parent().find("li").removeClass("active");
  			if(thisHasClass == 0) {
				$(this).parent().addClass("active");
				var thisHasClass = 1;
			}
		});
  	}

    if( jQuery("#royaltickets_all_agents").exists() ) {
        $("#royaltickets_all_agents .royaltickets-accordion-section h4").on("click", function(){
            if($(this).parent().parent().hasClass("active")) {
                var thisHasClass = 1;
            } else {
                var thisHasClass = 0;
            }
            $(this).parent().parent().removeClass("active");
            if(thisHasClass == 0) {
                $(this).parent().parent().addClass("active");
                var thisHasClass = 1;
            }
        });
    }

  	if( jQuery(".product-card-wishlist-container .yith-wcwl-wishlistaddedbrowse").exists() ) {
  		jQuery(".product-card-wishlist-container .yith-wcwl-wishlistaddedbrowse a").html('<i class="fa fa-heart" aria-hidden="true"></i>');
  	}

  	if( jQuery(".product-card-wishlist-container .yith-wcwl-wishlistexistsbrowse").exists() ) {
  		jQuery(".product-card-wishlist-container .yith-wcwl-wishlistexistsbrowse a").html('<i class="fa fa-heart" aria-hidden="true"></i>');
  	}

  	if( jQuery(".yith-wcwl-add-to-wishlist").exists() ) {

		function royaltickets_refresh_dynamic_contents() {
			$.ajax({
				url: royalticketsSettings.royaltickets_ajaxurl,
				type: "POST",
				data: {
					'action' : 'refresh_dynamic_contents'
				},
				success:function(data) {
					$(".count-wishlist").html(data['wishlist_count_products']);
				}
			});
		}
		
		royaltickets_refresh_dynamic_contents();
		
		jQuery(".royaltickets-add-to-wishlist a").on("click", function() {
			setTimeout(function() {	
				royaltickets_refresh_dynamic_contents();
			}, 2000);
		});

		jQuery("body").live('added_to_wishlist',function(e){ //trigger defined in jquery.yith-wcwl.js
			royaltickets_refresh_dynamic_contents();
		});

	}

  	if( jQuery(".position-Floating").exists() ) {
  		$('.royaltickets-content-wrapper').addClass('menu-position-Floating');
  	}

  	// Toggle big search modal window
  	$(".royaltickets-product-quick-view-block").on("click", function(e){
  		e.preventDefault();
  	});

	$("#menu-search-button a").on("click", function(){	
		$("#big-search-holder").toggleClass("modal-active");
		return false;
	});

	$(".close-big-search-holder").on("click", function(){	
		$("#big-search-holder").toggleClass("modal-active");
		return false;
	});

	$("#quick-view-big-holder .close-big-search-holder").on("click", function(){	
		$("#quick-view-big-holder").removeClass("modal-active");
		$("#big-search-holder").removeClass("modal-active");
		return false;
	});

	$(document).on("click", '.close-royaltickets-product-quick-view-block .fa', function(event) { 
		$("#quick-view-big-holder").removeClass("modal-active");
		$("#big-search-holder").removeClass("modal-active");
		return false;
	});

  	jQuery(".progress").fadeIn();

  	if (jQuery("#menu").attr('data-bg-color') !== "undefined") {
  		var value = jQuery("#menu").attr('data-bg-color');
	  	jQuery(".background-cover-holder").css("background-color", value);
	  	jQuery(".background-cover-holder-fixed").css("background-color", value);
	}

	if (jQuery("#menu").attr('data-bg-opacity') !== "undefined") {
  		var value = jQuery("#menu").attr('data-bg-opacity');
	  	jQuery(".background-cover-holder").css("opacity", value);
	}

	if (jQuery("#menu").attr('data-fixed-bg-color') !== "undefined") {
  		var value = jQuery("#menu").attr('data-fixed-bg-color');
	  	jQuery(".background-cover-holder-fixed").css("background-color", value);
	}

	if (jQuery("#menu").attr('data-fixed-bg-opacity') !== "undefined") {
  		var value = jQuery("#menu").attr('data-fixed-bg-opacity');
	  	jQuery(".background-cover-holder-fixed").css("opacity", value);
	}

	jQuery("#menu").css("opacity", 1);

  	function initNav() {

        function dark_background() {
            var e, t = $(".dark-background");
            if (t.length) {
                var negative_bottom = 0;
                if( jQuery(".royaltickets-buy-now-buttons").exists() ) {
                    negative_bottom = 90;
                }
                var n = $(".side-social-links");
                $(window).on("scroll", function() {
                    ! function(s) {
                        var r = s.scrollTop() + s.outerHeight() - n.height() - negative_bottom;
                        t.each(function() {
                            var t = $(this).offset().top,
                                s = $(this);
                            if (s.hasClass("dark-background") ? e = "white-social" : !s.hasClass("dark-background") && (e = "dark-social"), t + s.outerHeight() > r && r > t) return n.addClass(e), !1;
                            n.removeClass(e)
                        })
                    }($(this))
                })
            }
        };
        dark_background();

	    $(window).scroll(function() {
	      
	      	if ($(window).scrollTop() >= 300 ) {
	          	$('#menu').addClass('navbar-fixed');
	        } else{
	          	$('#menu').removeClass('navbar-fixed');
	        }

	    }).trigger('scroll');

	}

	function initChangeColors() {

		/*********************************************** 
			Change Colors Function
		***********************************************/
		if( jQuery("#main-color-container").exists() ) {

			var last;
			var next;
			var colors = ['colorset-one','colorset-two','colorset-three','colorset-four','colorset-five','colorset-six','colorset-seven'];

			do {
			    var next = Math.floor(Math.random()*colors.length);
			} while( next === last ) // if it's the same as the last one, try again!
			// tell it this is the last one now
			var last = next;

			var selectedcolor = colors[next];

			$("#main-color-container").append("<div class='colorsblock "+selectedcolor+"'></div>").children(':last').hide().fadeIn(200, function() {
				$("#main-color-container").find('.colorsblock:not(:last)').remove();
			});

			$("#color-palette").append("<div class='palette-colorset palette-"+selectedcolor+"'></div>").children(':last').hide().fadeIn(200, function() {
				$("#color-palette").find('.palette-colorset:not(:last)').remove();
			});

			$("#change-color").on("click", function(){

				do {
				    next = Math.floor(Math.random()*colors.length);
				} while( next === last ) // if it's the same as the last one, try again!
				// tell it this is the last one now
				last = next;

				var selectedcolor = colors[next];

				$("#main-color-container").append("<div class='colorsblock "+selectedcolor+"'></div>").children(':last').hide().fadeIn(200, function() {
					$("#main-color-container").find('.colorsblock:not(:last)').remove();
				});

				$("#color-palette").append("<div class='palette-colorset palette-"+selectedcolor+"'></div>").children(':last').hide().fadeIn(200, function() {
					$("#color-palette").find('.palette-colorset:not(:last)').remove();
				});
			});

		}

	}
	
	function initMobileMenu() {

		// Toggle mobile-menu
		$(".nav-toggle").on("click", function(){	
			$(this).toggleClass("active");
			$(".mobile-menu").slideToggle();
			if ($(".search-toggle").hasClass("active")) {
				$(".search-toggle").removeClass("active");
				$(".mobile-search").slideToggle();
			}
			return false;
		});
		
		
		// Toggle mobile-search
		$(".search-toggle").on("click", function(){	
			$(this).toggleClass("active");
			$(".mobile-search").slideToggle();
			if ($(".nav-toggle").hasClass("active")) {
				$(".nav-toggle").removeClass("active");
				$(".mobile-menu").slideToggle();
			}
			return false;
		});

	}

	function initResizeWindow() {

		// resize videos after container
		var vidSelector = ".post iframe, .post object, .post video, .widget-content iframe, .widget-content object, .widget-content iframe";	
		var resizeVideo = function(sSel) {
			$( sSel ).each(function() {
				var $video = $(this),
					$container = $video.parent(),
					iTargetWidth = $container.width();

				if ( !$video.attr("data-origwidth") ) {
					$video.attr("data-origwidth", $video.attr("width"));
					$video.attr("data-origheight", $video.attr("height"));
				}

				var ratio = iTargetWidth / $video.attr("data-origwidth");

				$video.css("width", iTargetWidth + "px");
				$video.css("height", ( $video.attr("data-origheight") * ratio ) + "px");
			});
		};

		resizeVideo(vidSelector);

		$(window).on('resize', function(event) {

	        jQuery.fn.exists = function(){return this.length>0;}

			if ($(window).width() > 1000) {
				$(".toggle").removeClass("active");
				$(".mobile-menu").hide();
				$(".mobile-search").hide();
			}

			resizeVideo(vidSelector);

	  	}).trigger('resize');

	}

	function initGeneral() {

		jQuery.fn.exists = function(){return this.length>0;}

		// count animation
	    if( jQuery(".count").exists() ) {
	    	jQuery(".count").one("inview", function(event, isInView) {
			  	if (isInView) {
			  		var duration = 1000;
			  		if(jQuery(this).text() >= 10) {
			  			var duration = 1500;
			  		}
			  		if(jQuery(this).text() >= 100) {
			  			var duration = 2500;
			  		}
			  		if(jQuery(this).text() >= 500) {
			  			var duration = 3500;
			  		}
			  		if(jQuery(this).text() >= 1000) {
			  			var duration = 4000;
			  		}
				    jQuery(this).prop('Counter',0).animate({
				        Counter: jQuery(this).text()
				    }, {
				        duration: duration,
				        easing: 'swing',
				        step: function (now) {
				            jQuery(this).text(Math.ceil(now));
				        }
				    });
			  	}
			});
   		};
	
		// Dropdown menus on touch devices
		//$( '.main-menu li:has(ul)' ).doubleTapToGo();
	    
		// When Jetpack Infinite scroll posts have loaded
		$( document.body ).on( 'post-load', function () {

			var $container = $('.posts');
			$container.masonry( 'reloadItems' );
			
			$blocks.imagesLoaded(function(){
				$blocks.masonry({
					itemSelector: '.post-container'
				});
		
				// Fade blocks in after images are ready (prevents jumping and re-rendering)
				$(".post-container").fadeIn();
			});
			
			// Rerun video resizing
			resizeVideo(vidSelector);
	
			$container.masonry( 'reloadItems' );
			
			$(document).ready( function() { setTimeout( function() { $blocks.masonry(); }, 500); });

		});

		// browser window scroll (in pixels) after which the "back to top" link is shown
		var offset = 300,
			//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
			offset_opacity = 1200,
			//duration of the top scrolling animation (in ms)
			scroll_top_duration = 700,
			//grab the "back to top" link
			$back_to_top = jQuery('.cd-top');

		//hide or show the "back to top" link
		$(window).scroll(function(){

			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('cd-fade-out');
			}

		});

		//smooth scroll to top
		$back_to_top.on('click', function(event){
			event.preventDefault();
			jQuery('body,html').animate({
				scrollTop: 0 ,
			 	}, scroll_top_duration
			);
		});

		// show sidebar menu
		jQuery('.mobile-menu').on('click', function(e){
			e.preventDefault();
			$( 'body' ).toggleClass( "royaltickets-side-opened" );
		});

        // show admin sidebar menu
        jQuery('.mobile-admin-menu').on('click', function(e){
            console.log("admin-menu");
            e.preventDefault();
            $( 'body' ).toggleClass( "royaltickets-side-opened" );
        });

		// hide sidebar menu
		jQuery('.royaltickets-side-close, .close-side-menu-icon').on('click', function(e){
			e.preventDefault();
			$( 'body' ).toggleClass( "royaltickets-side-opened" );
		});

		$(".royaltickets-side-inner .menu-item-has-children").each(function() {
			$(this).children("a").append('<i class="fa fa-angle-down open-sub-menu" aria-hidden="true"></i>');
		});

		// open sidebar sub menu 
		jQuery(".royaltickets-side-inner .menu-item-has-children > a").on('click', function(e){
			e.preventDefault();
			$(this).closest("li").children(".sub-menu").slideUp("fast");
                
            if ($(this).closest("li").children(".sub-menu").is(":hidden") == true ) {
                $(this).closest("li").children(".sub-menu").slideDown("normal");
            }
			//$(this).closest("li").toggleClass("opened-subm-menu");
		});

		function hideMenu() {
			jQuery('#royaltickets-side-menu').css("display", "none");
		};	

		if( jQuery(".event-gallery").exists() ) {
			$('.carousel-slider').slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: true,
	            infinite: true,
	            asNavFor: '.carousel-thumbnail'
	        });
	        $('.carousel-thumbnail').slick({
	            slidesToShow: 5,
	            slidesToScroll: 1,
	            asNavFor: '.carousel-slider',
	            dots: false,
	            infinite: true,
	            focusOnSelect: true,
	            arrows: true,
	            swipe: false,
	            responsive: [
	                {
	                    breakpoint: 600,
	                    settings: {
	                        slidesToShow: 3
	                    }
	                }
	            ]
	        });
       	}

       	$(document).ready( function() {

            $.fn.digits = function() {  
                return this.each(function(){ 
                    $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
                })
            }

            $("a.fancybox").fancybox({
                maxWidth    : 800,
                maxHeight   : 600,
                fitToView   : true,
                width       : '70%',
                height      : 'auto',
                afterLoad: function() {
                    this.title = (this.index + 1) + ' of ' + this.group.length;
                },
                helpers: { 
                    title: { type : 'inside' }
                }
            });

            // price range
            if( jQuery("#priceRange").exists() ) {

                var carPriceMin = parseFloat(jQuery( "#priceMin" ).val());
                var carPriceMax = parseFloat(jQuery( "#priceMax" ).val());

                var carPriceMinNew = carPriceMin;
                var carPriceMaxNew = carPriceMax;

                if( jQuery("#priceMinNew").exists() ) {
                    carPriceMinNew = parseFloat(jQuery( "#priceMinNew" ).val());
                }

                if( jQuery("#priceMaxNew").exists() ) {
                    carPriceMaxNew = parseFloat(jQuery( "#priceMaxNew" ).val());
                }

                // price range
                jQuery( "#priceRange" ).slider({
                    range: true,
                    step: 10,
                    min: carPriceMin,
                    max: carPriceMax,
                    values: [ carPriceMinNew, carPriceMaxNew ],
                    slide: function( event, ui ) {

                        $( "#min-price" ).val( ui.values[ 0 ] );
                        $( "#max-price" ).val( ui.values[ 1 ] );

                        $( "span.min-price-text span" ).text( ui.values[ 0 ] );
                        $( "span.max-price-text span" ).text( ui.values[ 1 ] );

                        $( "span.min-price-text span" ).digits();
                        $( "span.max-price-text span" ).digits();

                    },
                    stop: function( event, ui ) {
                        
                        var ajax_type = "filter";
                        $('.properties-holder').addClass('loading_properties');
                        jQuery(".properties-holder").slideUp("slow");

                    }
                });

                jQuery( "#min-price" ).val( $( "#priceRange" ).slider( "values", 0 ) );
                jQuery( "#max-price" ).val( $( "#priceRange" ).slider( "values", 1 ) );

                $( "span.min-price-text span" ).digits();
                $( "span.max-price-text span" ).digits();

            }
            //

       		$(document).on("click", '.royaltickets-gallery-fullscreen-slider-cover-open-gallery', function(event) { 
       			jQuery(".royaltickets-gallery-fullscreen-slider-cover").fadeOut( "fast", function() {

       			});
       		});

	  		if( jQuery(".royaltickets-side-menu").exists() ) {
	  			jQuery(".royaltickets-side-menu").css("padding-top", jQuery(".top-br").height());
	  			jQuery(".royaltickets-side-menu").css("padding-left", jQuery(".top-br").height());
	  			jQuery(".royaltickets-side-menu").css("padding-bottom", jQuery(".top-br").height());
	  		}

	  		if( jQuery(".left-br").exists() ) {
	  			var windowMarginTop = jQuery(".left-br").width();
	  		} else {
	  			var windowMarginTop = 0;
	  		} 

	  		jQuery(".royaltickets-content-wrapper").css("margin-top", windowMarginTop);

       		if( jQuery(".royaltickets-gallery-fullscreen-slider").exists() ) {

       			jQuery('.royaltickets-gallery-fullscreen-slider-flexslider').flexslider( {
	            	animation: "fade",
	            	slideshow: false,
	                slideshowSpeed: 4200,   
	                animationSpeed: 500, 
	                startAt: 0,
			        animationLoop: true,
			        pauseOnHover: true,
	            });

		  		if( jQuery(".left-br").exists() ) {
		  			var windowPadding = jQuery(".left-br").width() * 2;
		  			var windowMarginTop = jQuery(".left-br").width();
		  		} else {
		  			var windowPadding = 0;
		  			var windowMarginTop = 0;
		  		}

		  		if( jQuery("#wpadminbar").exists() ) {
		  			var windowAdminBar = jQuery("#wpadminbar").height();
		  		} else {
		  			var windowAdminBar = 0;
		  		}

		  		var windowHeight = jQuery(window).height() - windowPadding - windowAdminBar;

		  		jQuery(".royaltickets-gallery-fullscreen-slider").css("height", windowHeight);
		  		jQuery(".royaltickets-gallery-fullscreen-slider-flexslider").css("height", windowHeight);
		  		jQuery(".royaltickets-gallery-fullscreen-slider-flexslider ul.slides li").css("height", windowHeight);

		  		// Add image counter
		  		var totalImages = jQuery(".royaltickets-gallery-fullscreen-slider-flexslider .slides").attr('data-images');
		  		if(totalImages < 10) {
		  			var totalImagesFinal = "0" + totalImages;
		  		} else {
		  			var totalImagesFinal = totalImages;
		  		}

		  		jQuery( '<li class="count_holder"><span class="count_current">01</span><span class="count_total">'+totalImagesFinal+'</span></li>' ).insertAfter( ".royaltickets-gallery-fullscreen-slider .flex-direction-nav li.flex-nav-prev" );

		  		$(document).on("click", '.royaltickets-gallery-fullscreen-slider .flex-direction-nav li a', function(event) { 

		  			var mainParent = jQuery(this).parent().parent().parent();
		  			var mainParentCurrentSlide = mainParent.find(".slides li.flex-active-slide").attr('data-current');
		  			if( mainParentCurrentSlide < 10 ) {
		  				var mainParentCurrentSlideFinal = "0" + mainParentCurrentSlide;
		  			} else {
		  				var mainParentCurrentSlideFinal = mainParentCurrentSlide;
		  			}
		  			mainParent.find(".flex-direction-nav li.count_holder .count_current").text(mainParentCurrentSlideFinal);
		  		});

		  	}

		  	if( jQuery("#magazine-post-slider").exists() ) {

       			jQuery('#magazine-post-slider').flexslider( {
	            	animation: "fade",
	            	slideshow: false,
	                slideshowSpeed: 4200,   
	                animationSpeed: 500, 
	                startAt: 0,
			        animationLoop: true,
			        pauseOnHover: true,
	            });

       		}

		  	$(window).on('resize', function(event) {

		  		if( jQuery("#wpadminbar").exists() ) {
		  			jQuery(".royaltickets-side-menu").css("margin-top", jQuery("#wpadminbar").height());
		  		} 

		  		if( jQuery(".left-br").exists() ) {
		  			var windowMarginTop = jQuery(".left-br").width();
		  		} else {
		  			var windowMarginTop = 0;
		  		} 

		  		jQuery(".royaltickets-content-wrapper").css("margin-top", windowMarginTop);

		  		if( jQuery(".royaltickets-gallery-fullscreen-slider").exists() ) {

			  		if( jQuery(".left-br").exists() ) {
			  			var windowPadding = jQuery(".left-br").width() * 2;
			  			var windowMarginTop = jQuery(".left-br").width();
			  		} else {
			  			var windowPadding = 0;
			  			var windowMarginTop = 0;
			  		}

			  		if( jQuery("#wpadminbar").exists() ) {
			  			var windowAdminBar = jQuery("#wpadminbar").height();
			  		} else {
			  			var windowAdminBar = 0;
			  		}

			  		var windowHeight = jQuery(window).height() - windowPadding - windowAdminBar;

			  		jQuery(".royaltickets-gallery-fullscreen-slider").css("height", windowHeight);
			  		jQuery(".royaltickets-gallery-fullscreen-slider-flexslider").css("height", windowHeight);
			  		jQuery(".royaltickets-gallery-fullscreen-slider-flexslider ul.slides li").css("height", windowHeight);

			  	}

		  	});


       		// animate progress circles
		    if( jQuery(".royaltickets-progress-circle").exists() ) {
		    	jQuery(".royaltickets-progress-circle").on("inview", function(event, isInView) {
				  	if (isInView) {
				    	jQuery(this).addClass("animated");
				  	}
				});
       		};

       		// animate progress bars
		    if( jQuery(".royaltickets-progress-bar-progress").exists() ) {
		    	jQuery(".royaltickets-progress-bar-progress").on("inview", function(event, isInView) {
				  	if (isInView) {
				    	$(this).animate({
				            width: $(this).data("percent")
				        }, 700 );
				  	}
				});
       		};

            if( jQuery(".event-gallery-carousel").exists() ) {

                // vehicles carousel
                jQuery('.event-gallery-carousel').owlCarousel({
                    loop: false,
                    margin: 40,
                    nav: true,
                    dots: true,
                    smartSpeed: 700,
                    navText: [
                        "<i class='fe fe-arrow-left d-inline'></i>",
                        "<i class='fe fe-arrow-right d-inline'></i>"
                    ],
                    responsive:{
                        0:{
                            items: 1
                        },
                        400:{
                            items: 1
                        },
                        800:{
                            items: 2
                        },
                        1025:{
                            items: 3
                        }
                    }
                });

            }

       		if( jQuery(".has-image-bg").exists() ) {
       			jQuery("#main-color-container").css("opacity", 0);
       		};

       		/*-----------------------------------------------------------------------------------*/
	        /* Properties Sorting
	        /*-----------------------------------------------------------------------------------*/
	        function insertParam(key, value) {
	            key = encodeURI(key);
	            value = encodeURI(value);

	            var new_param = document.location.search.substr(1).split('&');

	            var i = new_param.length;
	            var x;
	            while (i--) {
	                x = new_param[i].split('=');

	                if (x[0] == key) {
	                    x[1] = value;
	                    new_param[i] = x.join('=');
	                    break;
	                }
	            }

	            if (i < 0) {
	                new_param[new_param.length] = [key, value].join('=');
	            }

	            //this will reload the page, it's likely better to store this until finished
	            document.location.search = new_param.join('&');
	        }

	        if( jQuery("#sort-properties").exists() ) {
	       		[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
					new SelectFx(el, {
	                    // when opening the select element, the default placeholder (if any) is shown
	                    stickyPlaceholder : true,
	                    // callback when changing the value
	                    onChange : function( val ) { 
	                        var key = 'sortby';
				            insertParam( key, val );
	                    }
	                });
				} );
	       	}

       		if( jQuery("#woocommerce-ordering-form").exists() ) {
				[].slice.call( document.querySelectorAll( '#woocommerce-ordering-form select.cs-select' ) ).forEach( function(el) {	
					new SelectFx(el, {
	                    // when opening the select element, the default placeholder (if any) is shown
	                    stickyPlaceholder : true,
	                    // callback when changing the value
	                    onChange : function( val ) { 
	                        var key = 'orderby';
				            insertParam( key, val );
	                    }
	                });
				} );
			}

	       	// Your base, I'm in it!
		    var originalAddClassMethod = jQuery.fn.addClass;

		    jQuery.fn.addClass = function(){
		        // Execute the original method.
		        var result = originalAddClassMethod.apply( this, arguments );

		        // trigger a custom event
		        jQuery(this).trigger('cssClassChanged');

		        // return the original result
		        return result;
		    }

	       	$(".carousel-thumbnail .slick-track .slick-slide").bind('cssClassChanged', function(){
		        var current = $('.carousel-thumbnail .slick-slide.slick-current').attr("data-slick-index");
		        current++;
		        $(".event-gallery-count .event-gallery-count-current").text("");
		        $(".event-gallery-count .event-gallery-count-current").text(current);
		    });

		    // init sortable accordions masonry
		  	if( jQuery(".royaltickets-sortable-accordion").exists() ) {
				$(".royaltickets-sortable-accordion #filters li").on("click", function(){

					$(this).parent().find("li").removeClass("active");
					$(this).addClass("active");

				  	var filterValue = $(this).attr('data-filter');
				  	$(this).parent().parent().find(".royaltickets-accordion li").addClass("hide-sortbale-block");
				  	$(this).parent().parent().find(".royaltickets-accordion li"+filterValue).removeClass("hide-sortbale-block");

				});
			}

			if( jQuery(".rrssb-buttons").exists() ) {

			  	$('.rrssb-buttons').rrssb({
				    // required:
				    title: jQuery(".rrssb-buttons").attr('data-title'),
				    url: jQuery(".rrssb-buttons").attr('data-link'),

				    // optional:
				    description: jQuery(".rrssb-buttons").attr('data-title'),
				    emailBody: jQuery(".rrssb-buttons").attr('data-title') + ' - ' + jQuery(".rrssb-buttons").attr('data-link')
			  	});

			};

       	});

        if( jQuery("select.chosen-select").exists() ) {

            jQuery('select.chosen-select').chosen({
                disable_search_threshold: 10
            });

        };

        // Chosen touch support.
        if ($('.chosen-container').length > 0) {
            $('.chosen-container').on('touchstart', function(e){
                e.stopPropagation(); e.preventDefault();
                // Trigger the mousedown event.
                $(this).trigger('mousedown');
            });
        }

        if( jQuery(".minimal-search-form-royaltickets-style").exists() ) {
            jQuery('.minimal-search-form-royaltickets-style .af-estate-search-field .selectwrap').each(function() {
                var label = jQuery(this).attr('data-label');
                jQuery(this).find("a.chosen-single").attr('data-label', label );
            });
        };

        jQuery('.royaltickets-search-keyword').focus(function() {
            jQuery('.royaltickets-search-locations-list').fadeIn(50);
        });

        jQuery('.royaltickets-search-keyword').focusout(function() {
            jQuery('.royaltickets-search-locations-list').fadeOut(50);
        });
		

		/*-------------------------------------------------------*/
        /*	More Options in Search Form
        /* -----------------------------------------------------*/
        jQuery(document).on('click', '.amenities-trigger > a', function(e){
            e.preventDefault();
            var triggerIcon = $( this).find( 'i' );
            var moreOptionsWrapper = $( '.amenities-wrapper' );
            if( triggerIcon.hasClass( 'fa-plus-square' ) ) {
                triggerIcon.removeClass( 'fa-plus-square' ).addClass( 'fa-minus-square' );
                //moreOptionsWrapper.removeClass( 'collapsed' );
                jQuery(".amenities-wrapper").slideDown();
            } else if ( triggerIcon.hasClass( 'fa-minus-square' ) ){
                triggerIcon.removeClass( 'fa-minus-square' ).addClass( 'fa-plus-square' );
                //moreOptionsWrapper.addClass( 'collapsed' );
                jQuery(".amenities-wrapper").slideUp();
            }
        });

	}

	function initLoad() {

    	$(window).load(function() {

            // AOS Animation
            AOS.init({
                once: true
            });

	      	jQuery.fn.exists = function(){return this.length>0;}

            jQuery('.preloader').fadeOut(400);

            if( jQuery("#total-properties-found").exists() ) {
                jQuery(".total-properties-found span").text(jQuery("#total-properties-found").val());
                console.log(jQuery("#total-properties-found").val());
            }

	      	jQuery(".fitvid").fitVids();

			if( jQuery(".gallery-item").exists() ) {
				jQuery(".gallery-item").css("height", jQuery(".gallery-item a").width()+30+"px");
			};

			if( jQuery(".gallery-item-thumnails").exists() ) {
				jQuery(".gallery-item-thumnails").css("height", jQuery(".gallery-item-thumnails a").width()+"px");
			};

			if( jQuery(".event-flexslider").exists() ) {
	            jQuery('.event-flexslider').flexslider( {
	            	animation: "fade",
	                slideshowSpeed: 4200,   
	                animationSpeed: 500, 
	                startAt: 0,
			        animationLoop: true,
			        pauseOnHover: true,
	            });
			}

			if( jQuery(".flexslider").exists() ) {
	            jQuery('.flexslider').flexslider( {
	            	animation: "slide",
	                slideshowSpeed: 4200,   
	                animationSpeed: 500, 
	            });
			}

            if( jQuery("#royaltickets-product-gallery-images").exists() ) {
                jQuery('#royaltickets-product-gallery-images').flexslider( {
                    animation: "slide",
                    slideshowSpeed: 4200,   
                    animationSpeed: 500, 
                    autplay: false
                });
            }

			if( jQuery(".shop-product-flexslider").exists() ) {
	            jQuery('.flexslider').flexslider( {
	            	animation: "fade",
	                slideshowSpeed: 1200,   
	                animationSpeed: 500, 
	                startAt: 0,
			        animationLoop: true,
			        controlNav: false,
			        smoothHeight: false,
			        slideshow: true 
	            });
			}

			jQuery(".flexslider .slides > li").css("height", jQuery(".flexslider .slides > li").closest(".royaltickets-post-miniblock").children(".royaltickets-gallery-post").height());

			jQuery(".woocommerce .products li.product .button").on('click', function(event){
				event.preventDefault();
				jQuery('#mini-cart-content').fadeIn(50);
				jQuery('#mini-cart-content .cart-dropdown').html('<i class="fa fa-refresh fa-spin"></i>');
			});

			jQuery( ".mini-cart-button" ).mouseenter(function() {
				jQuery( "#mini-cart-content" ).fadeIn(50);
			});

			jQuery( ".mini-cart-button" ).mouseleave(function() {
				jQuery( "#mini-cart-content" ).fadeOut(50);
			});

			if( jQuery(".royaltickets-image-slider").exists() ) {

				jQuery('.royaltickets-image-slider').each(function() {

					var sliderHeightType = jQuery(this).attr('data-height-style');

					if(sliderHeightType == "custom") {
						var sliderHeight = jQuery(this).attr('data-height');
						jQuery(this).find(".slides li").css("height", sliderHeight);
					}

					if(sliderHeightType == "full_height") {
						var sliderFullHeight = jQuery(window).height() - jQuery(".top-br").height() * 2;
						jQuery(this).find(".slides li").css("height", sliderFullHeight);
					}

					var count = 0;
					var countFinal = 0;

					jQuery(this).find('.flex-control-paging li a').each(function() {
					    count++;
					    if(count <= 9) {
					    	countFinal = "0"+count;
					    } else {
					    	countFinal = count;
					    }
					    jQuery(this).append("<span class='royaltickets-image-slider-count'>"+countFinal+"</span>");
					}); 

				});
			}

	    });
  	}
	
	function init () {

		if( jQuery(".position-Floating").exists() ) {
			// Do nothing
		} else {
		    initNav();
		}
	    initChangeColors();
	    initMobileMenu();
	    initResizeWindow();
	    initGeneral();
	    initLoad();
  	}

  	init();
	
})(jQuery)