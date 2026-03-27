package ch.friendlyspaces.app;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.ViewCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static final int SPLASH_PINK = Color.parseColor("#F4DDFF");

    private void enforcePinkBackgroundSurface() {
        Window window = getWindow();
        window.setBackgroundDrawable(new ColorDrawable(SPLASH_PINK));
        View decor = window.getDecorView();
        decor.setBackgroundColor(SPLASH_PINK);
        if (getBridge() != null && getBridge().getWebView() != null) {
            getBridge().getWebView().setBackgroundColor(SPLASH_PINK);
        }
    }

    private void enforceWebViewSafeInsets() {
        final View contentRoot = findViewById(android.R.id.content);
        if (contentRoot == null) return;

        ViewCompat.setOnApplyWindowInsetsListener(contentRoot, (view, insets) -> {
            View webView = getBridge() != null ? getBridge().getWebView() : null;
            if (webView == null) return insets;

            Insets safeInsets = insets.getInsets(
                WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout()
            );

            // Let the web layer keep handling top/bottom layout while we still protect horizontal cutouts.
            webView.setPadding(safeInsets.left, 0, safeInsets.right, 0);
            return insets;
        });

        ViewCompat.requestApplyInsets(contentRoot);
    }

    private void enforceEdgeToEdgeChrome() {
        Window window = getWindow();
        WindowCompat.setDecorFitsSystemWindows(window, false);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            window.setNavigationBarContrastEnforced(false);
        }
        WindowInsetsControllerCompat controller = WindowCompat.getInsetsController(window, window.getDecorView());
        if (controller != null) {
            controller.setAppearanceLightStatusBars(false);
            controller.setAppearanceLightNavigationBars(false);
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        enforcePinkBackgroundSurface();
        enforceEdgeToEdgeChrome();
        enforceWebViewSafeInsets();
    }

    @Override
    public void onResume() {
        super.onResume();
        enforcePinkBackgroundSurface();
        enforceEdgeToEdgeChrome();
        enforceWebViewSafeInsets();
        Window window = getWindow();
        window.getDecorView().post(this::enforcePinkBackgroundSurface);
        window.getDecorView().post(this::enforceWebViewSafeInsets);
        window.getDecorView().postDelayed(this::enforceEdgeToEdgeChrome, 120);
        window.getDecorView().postDelayed(this::enforcePinkBackgroundSurface, 120);
        window.getDecorView().postDelayed(this::enforceWebViewSafeInsets, 120);
        window.getDecorView().postDelayed(this::enforceEdgeToEdgeChrome, 450);
        window.getDecorView().postDelayed(this::enforcePinkBackgroundSurface, 450);
        window.getDecorView().postDelayed(this::enforceWebViewSafeInsets, 450);
    }
}
